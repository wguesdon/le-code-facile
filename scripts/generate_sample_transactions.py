"""Generate a deterministic fake transactions.xlsx for the finance project.

Run with:
    uv run --with pandas --with openpyxl python scripts/generate_sample_transactions.py

Output:
    public/sample-data/transactions.xlsx
"""

from __future__ import annotations

import random
from datetime import date, timedelta
from pathlib import Path

import pandas as pd


SEED = 2026
START = date(2026, 1, 1)
END = date(2026, 6, 30)

INCOME = [
    ("Salaire", "Salaire mensuel", 2450.00, 0),
    ("Freelance", "Mission freelance", 450.00, 200.00),
]

EXPENSES = [
    ("Loyer", "Loyer appartement", 850.00, 0),
    ("Alimentation", "Courses Carrefour", 65.00, 35.00),
    ("Alimentation", "Marché du dimanche", 22.00, 12.00),
    ("Alimentation", "Boulangerie", 8.00, 4.00),
    ("Transport", "Pass Navigo", 86.40, 0),
    ("Transport", "Essence", 60.00, 20.00),
    ("Loisirs", "Cinéma", 12.50, 0),
    ("Loisirs", "Livre", 22.00, 10.00),
    ("Loisirs", "Concert", 35.00, 15.00),
    ("Restaurant", "Déjeuner", 18.00, 8.00),
    ("Restaurant", "Dîner entre amis", 42.00, 20.00),
    ("Santé", "Pharmacie", 18.00, 12.00),
    ("Santé", "Consultation médecin", 30.00, 0),
    ("Vêtements", "Achat vêtements", 65.00, 40.00),
    ("Abonnements", "Netflix", 13.49, 0),
    ("Abonnements", "Spotify", 10.99, 0),
    ("Abonnements", "Téléphone", 19.99, 0),
    ("Cadeaux", "Cadeau anniversaire", 45.00, 25.00),
]


def daterange(start: date, end: date):
    cur = start
    while cur <= end:
        yield cur
        cur += timedelta(days=1)


def main() -> None:
    random.seed(SEED)

    rows: list[dict] = []

    for d in daterange(START, END):
        if d.day == 1:
            for cat, desc, base, jitter in INCOME[:1]:
                rows.append(
                    {
                        "date": d,
                        "description": desc,
                        "categorie": cat,
                        "montant": round(base + random.uniform(-jitter, jitter), 2),
                    }
                )

        if d.day == 5:
            for cat, desc, base, _ in [("Loyer", "Loyer appartement", 850.00, 0)]:
                rows.append(
                    {
                        "date": d,
                        "description": desc,
                        "categorie": cat,
                        "montant": -base,
                    }
                )

        n_expenses_today = 0
        if d.weekday() in (5, 6):
            n_expenses_today = random.choices([0, 1, 2, 3], weights=[1, 3, 3, 1])[0]
        else:
            n_expenses_today = random.choices([0, 1, 2], weights=[2, 4, 2])[0]

        for _ in range(n_expenses_today):
            cat, desc, base, jitter = random.choice(EXPENSES[1:])
            rows.append(
                {
                    "date": d,
                    "description": desc,
                    "categorie": cat,
                    "montant": -round(base + random.uniform(-jitter, jitter), 2),
                }
            )

        if d.day in (10, 25) and random.random() < 0.4:
            rows.append(
                {
                    "date": d,
                    "description": INCOME[1][1],
                    "categorie": INCOME[1][0],
                    "montant": round(
                        INCOME[1][2] + random.uniform(-INCOME[1][3], INCOME[1][3]), 2
                    ),
                }
            )

    df = pd.DataFrame(rows).sort_values("date").reset_index(drop=True)
    df["date"] = pd.to_datetime(df["date"])

    out = Path("public/sample-data/transactions.xlsx")
    out.parent.mkdir(parents=True, exist_ok=True)

    with pd.ExcelWriter(out, engine="openpyxl") as writer:
        df.to_excel(writer, sheet_name="Transactions", index=False)
        ws = writer.sheets["Transactions"]
        ws.column_dimensions["A"].width = 12
        ws.column_dimensions["B"].width = 28
        ws.column_dimensions["C"].width = 16
        ws.column_dimensions["D"].width = 12

    print(f"Wrote {len(df)} rows to {out}")
    print(df.head())
    print("---")
    print("Categories:", sorted(df["categorie"].unique()))
    print("Date range:", df["date"].min().date(), "→", df["date"].max().date())
    print("Income total:", round(df[df["montant"] > 0]["montant"].sum(), 2))
    print("Expense total:", round(df[df["montant"] < 0]["montant"].sum(), 2))


if __name__ == "__main__":
    main()

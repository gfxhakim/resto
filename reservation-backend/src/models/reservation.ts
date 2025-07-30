import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function saveReservationToDB(reservation: any) {
  const db = await open({ filename: './reservations.db', driver: sqlite3.Database });
  await db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    date TEXT,
    time TEXT,
    guests INTEGER
  )`);
  await db.run(
    'INSERT INTO reservations (name, email, date, time, guests) VALUES (?, ?, ?, ?, ?)',
    reservation.name,
    reservation.email,
    reservation.date,
    reservation.time,
    reservation.guests
  );
  await db.close();
}

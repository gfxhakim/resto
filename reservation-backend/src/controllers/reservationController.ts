import { Request, Response } from 'express';
// @ts-ignore
import { saveReservationToDB } from '../models/reservation';
// @ts-ignore
import { addReservationToSheet } from '../services/googleSheetsService';

export async function createReservation(req: Request, res: Response) {
  try {
    const reservation = req.body;
    await saveReservationToDB(reservation);
    await addReservationToSheet(reservation);
    res.status(201).json({ message: 'Reservation saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save reservation.' });
  }
}

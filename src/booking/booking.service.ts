import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './entities/booking.entity';
// import { CreateBookingDto, UpdateBookingDto } from './dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
  ) {}

  async create(dto: CreateBookingDto): Promise<Booking> {
    const existing = await this.bookingModel.findOne({
      vendorId: dto.vendorId,
      serviceId: dto.serviceId,
      date: dto.date,
      timeSlot: dto.timeSlot
    });

    if (existing) {
      throw new ConflictException('This time slot is already booked.');
    }

    return await this.bookingModel.create(dto);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async findOne(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id);
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async findUserBooking(id: string): Promise<Booking[]> {
    const booking = await this.bookingModel.find({userId: id});
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async update(id: string, dto: UpdateBookingDto): Promise<Booking> {
    const booking = await this.bookingModel.findByIdAndUpdate(id, dto, { new: true });
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async remove(id: string): Promise<void> {
    const booking = await this.bookingModel.findByIdAndDelete(id);
    if (!booking) throw new NotFoundException('Booking not found');
  }
}

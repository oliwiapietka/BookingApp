import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({city:city})}))
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const apartmentCount = await Hotel.countDocuments({type:"apartment"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const vacationHouseCount = await Hotel.countDocuments({type:"vacationhouse"})
    const cabinCount = await Hotel.countDocuments({type:"cabin"})
    const glampingCount = await Hotel.countDocuments({type:"glamping"})

    res.status(200).json([
      {type: "hotel", count: hotelCount},
      {type: "apartment", count: apartmentCount},
      {type: "villa", count: villaCount},
      {type: "resort", count: resortCount},
      {type: "vacationhouse", count: vacationHouseCount},
      {type: "cabin", count: cabinCount},
      {type: "glamping", count: glampingCount},
    ]);
  } catch (err) {
    next(err);
  }
};
import image_slide_1 from '../assets/bus-photos/img_1.jpg'
import image_slide_2 from '../assets/bus-photos/img_2.jpg'
import image_slide_3 from '../assets/bus-photos/img_3.jpg'
import image_slide_4 from '../assets/bus-photos/img_4.jpg'
import image_slide_5 from '../assets/bus-photos/img_5.jpg'
import image_slide_6 from '../assets/bus-photos/img_6.jpg'
import image_slide_8 from '../assets/bus-photos/img_8.jpg'
import image_slide_7 from '../assets/bus-photos/img_7.jpg'
const busData = [
    {
      id: 1,
      busname: "name1",
      image: image_slide_1,
      capacity: 50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 2,
      busname:"name2",
      image: image_slide_2,
      capacity: 50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 3,
      busname: "name3",
      image: image_slide_3,
      capacity: 50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 4,
      busname: "name4",
      image: image_slide_4,
      capacity: 50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 5,
      busname: "name5",
      image: image_slide_5,
      capacity: 50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 6,
      busname: "name5",
      image: image_slide_6,
      capacity:50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 7,
      busname: "name5",
      image: image_slide_7,
      capacity:50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
    {
      id: 8,
      busname: "name5",
      image: image_slide_8,
      capacity:50,
      packages: [
        {
            name: "Package 1",
            places: ["Chennai", "Madurai", "Coimbatore"],
            food: {
                breakfast: "Idli, Dosa",
                lunch: "Veg Meals",
                dinner: "Chapati, Paneer Masala"
            },
            stay: ["Hotel A", "Hotel B", "Resort C"],
            includes: ["Guide", "Tickets", "AC Bus"]
        },
        {
            name: "Package 2",
            places: ["Bangalore", "Mysore"],
            food: {
                breakfast: "Pongal, Vada",
                lunch: "South Indian Thali",
                dinner: "Biryani"
            },
            stay: ["Lodge X", "Hotel Y"],
            includes: ["Local Transport", "Meals"]
        },
        {
            name: "Package 3",
            places: ["Goa", "Mumbai"],
            food: {
                breakfast: "Poha, Pav Bhaji",
                lunch: "Seafood Special",
                dinner: "Butter Chicken, Naan"
            },
            stay: ["Beach Resort Goa", "5-Star Hotel Mumbai"],
            includes: ["Beach Activities", "Cruise Party", "Sightseeing"]
        },
        {
            name: "Package 4",
            places: ["Hyderabad", "Vizag"],
            food: {
                breakfast: "Hyderabadi Biryani",
                lunch: "Andhra Meals",
                dinner: "Tandoori Platter"
            },
            stay: ["Heritage Hotel Hyderabad", "Sea View Hotel Vizag"],
            includes: ["Ramoji Film City Visit", "Museum Tours", "Boat Ride"]
        },
        {
            name: "Package 5",
            places: ["Delhi", "Agra", "Jaipur"],
            food: {
                breakfast: "Aloo Paratha, Lassi",
                lunch: "Mughlai Thali",
                dinner: "Dal Bati Churma"
            },
            stay: ["Delhi Grand Hotel", "Taj View Resort", "Royal Palace Jaipur"],
            includes: ["Taj Mahal Visit", "Red Fort Tour", "Camel Safari"]
        },
        {
            name: "Package 6",
            places: ["Kolkata", "Darjeeling"],
            food: {
                breakfast: "Mishti Doi, Kachori",
                lunch: "Bengali Thali",
                dinner: "Momos, Thukpa"
            },
            stay: ["City Hotel Kolkata", "Tea Estate Resort Darjeeling"],
            includes: ["Toy Train Ride", "Tiger Hill Sunrise View", "Local Markets"]
        },
        {
            name: "Package 7",
            places: ["Rajasthan Desert Tour"],
            food: {
                breakfast: "Kesar Milk, Kachori",
                lunch: "Rajasthani Thali",
                dinner: "Laal Maas, Bajra Roti"
            },
            stay: ["Desert Camp", "Heritage Haveli"],
            includes: ["Camel Ride", "Folk Dance Show", "Jeep Safari"]
        },
        {
            name: "Package 8",
            places: ["Kerala Backwaters", "Munnar"],
            food: {
                breakfast: "Puttu, Kadala Curry",
                lunch: "Kerala Sadya",
                dinner: "Appam, Stew"
            },
            stay: ["Houseboat Stay", "Tea Garden Resort"],
            includes: ["Boating in Backwaters", "Wildlife Safari", "Tea Plantation Visit"]
        },
        {
            name: "Package 9",
            places: ["Andaman & Nicobar"],
            food: {
                breakfast: "Fresh Tropical Fruits, Coconut Water",
                lunch: "Seafood Platter",
                dinner: "Grilled Lobster, Rice"
            },
            stay: ["Beach Bungalow", "Luxury Resort"],
            includes: ["Scuba Diving", "Snorkeling", "Island Hopping"]
        },
        {
            name: "Package 10",
            places: ["Leh Ladakh"],
            food: {
                breakfast: "Butter Tea, Tsampa",
                lunch: "Thukpa, Tingmo",
                dinner: "Yak Meat Curry, Local Bread"
            },
            stay: ["Mountain Homestay", "Lakeside Camp"],
            includes: ["Bike Ride", "Pangong Lake Visit", "Monastery Tour"]
        }
    ],
    },
  ];
  export default busData;
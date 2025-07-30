"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Facebook,
  Instagram,
  Twitter,
  MenuIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function RestaurantWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const menuItems = {
    pasta: [
      {
        name: "Spaghetti Carbonara",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
        description: "Classic Italian pasta with eggs, cheese, and crispy bacon",
      },
      {
        name: "Penne Arrabbiata",
        price: "$16",
        image: "/placeholder.svg?height=300&width=400",
        description: "Spicy tomato sauce with garlic and red peppers",
      },
      {
        name: "Fettuccine Alfredo",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
        description: "Rich and creamy white sauce with parmesan cheese",
      },
    ],
    pizza: [
      {
        name: "Margherita Supreme",
        price: "$22",
        image: "/placeholder.svg?height=300&width=400",
        description: "Fresh mozzarella, tomatoes, and basil on crispy crust",
      },
      {
        name: "Pepperoni Deluxe",
        price: "$24",
        image: "/placeholder.svg?height=300&width=400",
        description: "Premium pepperoni with extra cheese and herbs",
      },
      {
        name: "Veggie Garden",
        price: "$20",
        image: "/placeholder.svg?height=300&width=400",
        description: "Bell peppers, mushrooms, olives, and fresh vegetables",
      },
    ],
    burgers: [
      {
        name: "Classic Beef Burger",
        price: "$15",
        image: "/placeholder.svg?height=300&width=400",
        description: "Juicy beef patty with lettuce, tomato, and special sauce",
      },
      {
        name: "Chicken Deluxe",
        price: "$14",
        image: "/placeholder.svg?height=300&width=400",
        description: "Grilled chicken breast with avocado and crispy bacon",
      },
      {
        name: "Veggie Burger",
        price: "$13",
        image: "/placeholder.svg?height=300&width=400",
        description: "Plant-based patty with fresh vegetables and herbs",
      },
    ],
  }

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing food and service! The pasta was perfectly cooked and the atmosphere is so welcoming.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Best pizza in town! The crust is crispy and the toppings are always fresh. Highly recommend!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "The burgers are incredible and the staff is so friendly. This is our new favorite restaurant!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">
                Potatos <span className="text-green-500">Restaurant</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#home" className="text-white hover:text-green-500 transition-colors">
                  Home
                </Link>
                <Link href="#menu" className="text-white hover:text-green-500 transition-colors">
                  Menu
                </Link>
                <Link href="#about" className="text-white hover:text-green-500 transition-colors">
                  About
                </Link>
                <Link href="#reservation" className="text-white hover:text-green-500 transition-colors">
                  Reservation
                </Link>
                <Link href="#contact" className="text-white hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-green-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-white hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link href="#menu" className="block px-3 py-2 text-white hover:text-green-500 transition-colors">
                Menu
              </Link>
              <Link href="#about" className="block px-3 py-2 text-white hover:text-green-500 transition-colors">
                About
              </Link>
              <Link href="#reservation" className="block px-3 py-2 text-white hover:text-green-500 transition-colors">
                Reservation
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-white hover:text-green-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restaurant-interior.jpg"
            alt="Elegant restaurant interior with candlelit tables"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-green-500">Potatos</span> Restaurant
            </h1>
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">Fresh, Flavorful, Unforgettable</p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Experience culinary excellence with our handcrafted pasta, wood-fired pizzas, and gourmet burgers. Every
              dish is prepared with the finest ingredients and passion for flavor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                View Menu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Make a Reservation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-black font-medium">
                    Name
                  </Label>
                  <Input id="name" placeholder="Your name" className="mt-1 border-gray-300 focus:border-green-500" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-black font-medium">
                    Phone
                  </Label>
                  <Input id="phone" placeholder="Your phone" className="mt-1 border-gray-300 focus:border-green-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="guests" className="text-black font-medium">
                    Guests
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-green-500">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date" className="text-black font-medium">
                    Date
                  </Label>
                  <Input id="date" type="date" className="mt-1 border-gray-300 focus:border-green-500" />
                </div>
                <div>
                  <Label htmlFor="time" className="text-black font-medium">
                    Time
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-green-500">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="17:30">5:30 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="18:30">6:30 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="19:30">7:30 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="20:30">8:30 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-medium">
                Reserve Table
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-1 bg-green-500 mb-6"></div>
              <h2 className="text-4xl font-bold text-black mb-6">About Potatos Restaurant</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 1995, Potatos Restaurant has been serving exceptional cuisine with a passion for quality and
                flavor. Our chefs combine traditional techniques with modern innovation to create unforgettable dining
                experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From our handmade pasta and wood-fired pizzas to our gourmet burgers, every dish is crafted with the
                finest ingredients sourced from local farms and trusted suppliers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-green-600 mb-2">25+</h4>
                  <p className="text-gray-700">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-green-600 mb-2">50k+</h4>
                  <p className="text-gray-700">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Restaurant interior"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-2">Award Winning</h4>
                <p className="text-green-100">Best Restaurant 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-black mb-4">Our Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted selection of pasta, pizza, and burgers, each prepared with passion and the
              finest ingredients.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-16">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-3xl font-bold text-black mb-8 capitalize text-center">{category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-600 text-white">{item.price}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-black mb-2">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Take a visual journey through our culinary creations and restaurant atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="relative">
            <Card className="p-8 shadow-xl border-0">
              <div className="text-center">
                <Image
                  src={reviews[currentReview].avatar || "/placeholder.svg"}
                  alt={reviews[currentReview].name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">"{reviews[currentReview].text}"</p>
                <h4 className="text-xl font-bold text-black">{reviews[currentReview].name}</h4>
              </div>
            </Card>

            <Button
              variant="outline"
              size="sm"
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full w-12 h-12 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full w-12 h-12 border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-black mb-4">Contact & Location</h2>
            <p className="text-xl text-gray-600">Visit us today or get in touch for reservations and inquiries.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Address</h4>
                    <p className="text-gray-600">123 Culinary Street, Food District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-gray-600">info@potatosrestaurant.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Hours</h4>
                    <p className="text-gray-600">Mon-Thu: 11AM-10PM</p>
                    <p className="text-gray-600">Fri-Sat: 11AM-11PM</p>
                    <p className="text-gray-600">Sun: 12PM-9PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-8">Find Us</h3>
              <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Google Map</p>
                  <p className="text-sm text-gray-500">Map integration would be implemented here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Potatos <span className="text-green-500">Restaurant</span>
              </h3>
              <p className="text-gray-400 mb-4">Fresh, flavorful, and unforgettable dining experiences since 1995.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-green-500 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-green-500 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-green-500 p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-green-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-gray-400 hover:text-green-500 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-green-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-green-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Thursday: 11AM - 10PM</li>
                <li>Friday - Saturday: 11AM - 11PM</li>
                <li>Sunday: 12PM - 9PM</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Culinary Street</li>
                <li>Food District, City 12345</li>
                <li>(555) 123-4567</li>
                <li>info@potatosrestaurant.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Potatos Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

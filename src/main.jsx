import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const treks = [
  {
    name: "Triund",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Summer", "Spring", "Autumn"],
    budget: "Under ₹5k",
    altitude: "Medium",
    themes: ["Beginner-friendly", "Weekend", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A classic Dharamshala ridge walk with Dhauladhar views and a friendly first-trek feel."
  },
  {
    name: "Nag Tibba",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Winter", "Spring", "Autumn", "Summer"],
    budget: "Under ₹5k",
    altitude: "Medium",
    themes: ["Beginner-friendly", "Weekend", "Forest", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A short Garhwal summit trek known for oak forests, campsites, and snowy winter weekends."
  },
  {
    name: "Kedarkantha",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Winter", "Spring"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Snow", "Beginner-friendly", "Views", "Adventure"],
    startingCity: "Delhi",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "One of India's most loved winter summit treks with snow trails and sweeping Himalayan panoramas."
  },
  {
    name: "Brahmatal",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Winter", "Spring"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Snow", "Lakes", "Forest", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A winter trek through forests and frozen lakes with big views of Trishul and Nanda Ghunti."
  },
  {
    name: "Sar Pass",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Summer", "Spring"],
    budget: "₹5k-₹10k",
    altitude: "High",
    themes: ["Snow", "Adventure", "Forest", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A lively Parvati Valley route with forest camps, snow slopes, and an adventurous pass crossing."
  },
  {
    name: "Hampta Pass",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Summer", "Monsoon"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Adventure", "Meadows", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A dramatic crossover from green Kullu valleys to the stark landscapes near Spiti."
  },
  {
    name: "Bhrigu Lake",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹5k-₹10k",
    altitude: "High",
    themes: ["Lakes", "Meadows", "Weekend", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A compact high-altitude lake trek above Manali with rolling meadows and fast-changing views."
  },
  {
    name: "Beas Kund",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Lakes", "Beginner-friendly", "Views", "Weekend"],
    startingCity: "Chandigarh",
    fitnessLevel: "Beginner",
    safety: "Guide recommended",
    description: "A scenic Manali trek to the source lake of the Beas with glacier views and gentle gradients."
  },
  {
    name: "Pin Parvati Pass",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Snow", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A demanding trans-Himalayan expedition linking Parvati Valley with the cold desert of Spiti."
  },
  {
    name: "Kheerganga",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Summer", "Spring", "Autumn"],
    budget: "Under ₹5k",
    altitude: "Medium",
    themes: ["Beginner-friendly", "Weekend", "Forest", "Spiritual"],
    startingCity: "Chandigarh",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A relaxed Parvati Valley trail through villages and forests, ending near hot springs."
  },
  {
    name: "Prashar Lake",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Winter", "Spring", "Summer", "Autumn"],
    budget: "Under ₹5k",
    altitude: "Medium",
    themes: ["Lakes", "Weekend", "Beginner-friendly", "Spiritual"],
    startingCity: "Chandigarh",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A peaceful lake trek near Mandi with a pagoda temple and wide Pir Panjal views."
  },
  {
    name: "Kareri Lake",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Summer", "Autumn", "Spring"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Lakes", "Forest", "Weekend", "Views"],
    startingCity: "Chandigarh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A beautiful trail through Gaddi villages and forests to a clear alpine lake."
  },
  {
    name: "Indrahar Pass",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Difficult",
    duration: "4-6 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Adventure", "Views", "Snow"],
    startingCity: "Chandigarh",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A steep Dhauladhar pass trek above McLeod Ganj with rugged terrain and big exposure."
  },
  {
    name: "Chandrakhani Pass",
    state: "Himachal Pradesh",
    region: "Himachal",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Summer", "Spring", "Autumn"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Meadows", "Forest", "Views", "Weekend"],
    startingCity: "Chandigarh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A scenic Kullu Valley pass trek with cedar forests, meadows, and village stays."
  },
  {
    name: "Har Ki Dun",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Moderate",
    duration: "7+ days",
    seasons: ["Spring", "Summer", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "Medium",
    themes: ["Meadows", "Forest", "Views", "Spiritual"],
    startingCity: "Delhi",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A timeless valley trek through old villages, forests, and amphitheatre-like mountain views."
  },
  {
    name: "Valley of Flowers",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Monsoon", "Summer"],
    budget: "₹10k-₹20k",
    altitude: "Medium",
    themes: ["Meadows", "Forest", "Spiritual", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A UNESCO-listed monsoon valley famous for alpine blooms and the Hemkund Sahib extension."
  },
  {
    name: "Roopkund",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Snow", "Meadows", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A high-altitude trek known for mystery, alpine meadows, and challenging terrain."
  },
  {
    name: "Kuari Pass",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Winter", "Spring", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Snow", "Meadows", "Views", "Beginner-friendly"],
    startingCity: "Delhi",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A classic Garhwal route with oak forests and grand views of Nanda Devi and Dronagiri."
  },
  {
    name: "Dayara Bugyal",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Easy",
    duration: "4-6 days",
    seasons: ["Winter", "Spring", "Summer", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "Medium",
    themes: ["Meadows", "Snow", "Beginner-friendly", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Beginner",
    safety: "Guide recommended",
    description: "A gentle meadow trek that works beautifully for both green summer slopes and winter snow."
  },
  {
    name: "Chopta Tungnath Chandrashila",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Winter", "Spring", "Summer", "Autumn"],
    budget: "₹5k-₹10k",
    altitude: "High",
    themes: ["Spiritual", "Views", "Weekend", "Snow"],
    startingCity: "Delhi",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A rewarding short trek to Tungnath temple and Chandrashila summit with Himalayan views."
  },
  {
    name: "Gaumukh Tapovan",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Spiritual", "Adventure", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A sacred and strenuous route to the Gangotri glacier and the meadows below Shivling."
  },
  {
    name: "Rupin Pass",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Snow", "Forest", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A dramatic crossover route with hanging villages, waterfalls, snowfields, and a high pass."
  },
  {
    name: "Bali Pass",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Snow", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A challenging high pass trek connecting Har Ki Dun with Yamunotri over rugged terrain."
  },
  {
    name: "Kedartal",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "4-6 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Lakes", "Adventure", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A tough Gangotri trail to a glacial lake under the Thalay Sagar massif."
  },
  {
    name: "Pangarchulla",
    state: "Uttarakhand",
    region: "Uttarakhand",
    difficulty: "Difficult",
    duration: "4-6 days",
    seasons: ["Spring", "Winter"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Snow", "Adventure", "Views"],
    startingCity: "Delhi",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A summit-oriented trek near Joshimath with steep snow sections and outstanding peak views."
  },
  {
    name: "Kashmir Great Lakes",
    state: "Jammu and Kashmir",
    region: "Kashmir",
    difficulty: "Moderate",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Lakes", "Meadows", "Views", "Adventure"],
    startingCity: "Srinagar",
    fitnessLevel: "Regular",
    safety: "Group-only",
    description: "A spectacular multi-day journey past turquoise alpine lakes and rolling Kashmiri meadows."
  },
  {
    name: "Tarsar Marsar",
    state: "Jammu and Kashmir",
    region: "Kashmir",
    difficulty: "Moderate",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Lakes", "Meadows", "Views"],
    startingCity: "Srinagar",
    fitnessLevel: "Regular",
    safety: "Group-only",
    description: "A calmer Kashmir trek with twin lakes, shepherd camps, and soft meadow walking."
  },
  {
    name: "Gangabal",
    state: "Jammu and Kashmir",
    region: "Kashmir",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Lakes", "Meadows", "Views"],
    startingCity: "Srinagar",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A compact Kashmir trek to the Gangabal and Nundkol lakes below Mount Harmukh."
  },
  {
    name: "Kolahoi Glacier",
    state: "Jammu and Kashmir",
    region: "Kashmir",
    difficulty: "Difficult",
    duration: "4-6 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Views", "Snow"],
    startingCity: "Srinagar",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A rugged trail from Aru toward the Kolahoi glacier with wild valleys and serious terrain."
  },
  {
    name: "Markha Valley",
    state: "Ladakh",
    region: "Ladakh",
    difficulty: "Moderate",
    duration: "7+ days",
    seasons: ["Summer", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Views", "Spiritual"],
    startingCity: "Leh",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A Ladakh classic with villages, monasteries, river crossings, and arid high-altitude beauty."
  },
  {
    name: "Chadar Trek",
    state: "Ladakh",
    region: "Ladakh",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Winter"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Snow", "Adventure"],
    startingCity: "Leh",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A legendary winter expedition over the frozen Zanskar River, suited only to prepared trekkers."
  },
  {
    name: "Stok Kangri Base",
    state: "Ladakh",
    region: "Ladakh",
    difficulty: "Difficult",
    duration: "4-6 days",
    seasons: ["Summer"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Views"],
    startingCity: "Leh",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A high-altitude approach trek near Leh that gives a strong taste of Ladakh's thin-air terrain."
  },
  {
    name: "Sham Valley",
    state: "Ladakh",
    region: "Ladakh",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Summer", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Beginner-friendly", "Spiritual", "Views"],
    startingCity: "Leh",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A gentle Ladakh village trek with homestays, monasteries, and gradual acclimatization."
  },
  {
    name: "Goechala",
    state: "Sikkim",
    region: "Sikkim",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Spring", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Adventure", "Views", "Forest", "Snow"],
    startingCity: "Siliguri",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A demanding Sikkim trek with rhododendron forests and magnificent views toward Kanchenjunga."
  },
  {
    name: "Sandakphu",
    state: "West Bengal",
    region: "Sikkim",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Spring", "Autumn", "Winter"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Views", "Forest", "Beginner-friendly"],
    startingCity: "Siliguri",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A Singalila ridge trek famous for sunrise views of Everest, Lhotse, Makalu, and Kanchenjunga."
  },
  {
    name: "Dzongri",
    state: "Sikkim",
    region: "Sikkim",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Spring", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "High",
    themes: ["Forest", "Views", "Snow"],
    startingCity: "Siliguri",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A shorter Sikkim trek through forests to a high viewpoint facing the Kanchenjunga range."
  },
  {
    name: "Green Lake Trek",
    state: "Sikkim",
    region: "Sikkim",
    difficulty: "Difficult",
    duration: "7+ days",
    seasons: ["Spring", "Autumn"],
    budget: "₹20k+",
    altitude: "High",
    themes: ["Lakes", "Adventure", "Views", "Forest"],
    startingCity: "Siliguri",
    fitnessLevel: "Advanced",
    safety: "Group-only",
    description: "A remote North Sikkim trek toward the Zemu glacier basin and grand Kanchenjunga views."
  },
  {
    name: "Rajmachi",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Easy",
    duration: "1 day",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Weekend", "Monsoon", "Beginner-friendly", "Views"],
    startingCity: "Mumbai",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A popular Sahyadri fort trek with monsoon greenery, waterfalls, and easy access from Mumbai or Pune."
  },
  {
    name: "Kalsubai",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Moderate",
    duration: "1 day",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Weekend", "Monsoon", "Views", "Adventure"],
    startingCity: "Mumbai",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "Maharashtra's highest peak, usually done as a rewarding one-day climb with ladders and ridge views."
  },
  {
    name: "Harishchandragad",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Difficult",
    duration: "2-3 days",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Adventure", "Weekend", "Views", "Monsoon"],
    startingCity: "Pune",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A dramatic Sahyadri fort trek known for Konkan Kada, caves, and demanding route options."
  },
  {
    name: "Lohagad",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Easy",
    duration: "1 day",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Weekend", "Beginner-friendly", "Monsoon", "Views"],
    startingCity: "Pune",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "An accessible fort walk near Lonavala, ideal for a first monsoon trek."
  },
  {
    name: "Andharban",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Moderate",
    duration: "1 day",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Forest", "Monsoon", "Weekend", "Adventure"],
    startingCity: "Pune",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A dense forest descent trail filled with mist, streams, and Sahyadri viewpoints."
  },
  {
    name: "Devkund Waterfall",
    state: "Maharashtra",
    region: "Maharashtra",
    difficulty: "Easy",
    duration: "1 day",
    seasons: ["Monsoon", "Winter"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Forest", "Monsoon", "Weekend", "Beginner-friendly"],
    startingCity: "Pune",
    fitnessLevel: "Beginner",
    safety: "Guide recommended",
    description: "A beginner-friendly forest trail to a bright plunge waterfall near Bhira."
  },
  {
    name: "Kumara Parvatha",
    state: "Karnataka",
    region: "Karnataka",
    difficulty: "Difficult",
    duration: "2-3 days",
    seasons: ["Winter", "Spring"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Adventure", "Forest", "Views", "Weekend"],
    startingCity: "Bangalore",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A tough Western Ghats climb with forest, grassland, and a long summit push."
  },
  {
    name: "Kudremukh",
    state: "Karnataka",
    region: "Karnataka",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Monsoon", "Winter"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Meadows", "Forest", "Monsoon", "Views"],
    startingCity: "Bangalore",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A lush Western Ghats trek over rolling green ridges, especially beautiful after rains."
  },
  {
    name: "Tadiandamol",
    state: "Karnataka",
    region: "Karnataka",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Winter", "Monsoon"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Weekend", "Beginner-friendly", "Forest", "Views"],
    startingCity: "Bangalore",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "Coorg's highest peak offers a forgiving climb through forest edges and grassland slopes."
  },
  {
    name: "Chembra Peak",
    state: "Kerala",
    region: "Kerala",
    difficulty: "Easy",
    duration: "1 day",
    seasons: ["Winter", "Spring"],
    budget: "Under ₹5k",
    altitude: "Medium",
    themes: ["Weekend", "Beginner-friendly", "Views"],
    startingCity: "Kochi",
    fitnessLevel: "Beginner",
    safety: "Guide recommended",
    description: "A Wayanad day trek known for its green slopes and heart-shaped lake viewpoint zone."
  },
  {
    name: "Agasthyarkoodam",
    state: "Kerala",
    region: "Kerala",
    difficulty: "Difficult",
    duration: "2-3 days",
    seasons: ["Winter", "Spring"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Forest", "Spiritual", "Adventure", "Views"],
    startingCity: "Kochi",
    fitnessLevel: "Advanced",
    safety: "Guide recommended",
    description: "A permit-based biodiversity-rich trek to a sacred peak in the Agasthyamala range."
  },
  {
    name: "Dzukou Valley",
    state: "Nagaland",
    region: "Northeast",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Monsoon", "Spring", "Winter"],
    budget: "₹5k-₹10k",
    altitude: "Medium",
    themes: ["Meadows", "Monsoon", "Views", "Weekend"],
    startingCity: "Guwahati",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A dreamy Northeast valley trek with rolling grasslands, seasonal flowers, and quiet camps."
  },
  {
    name: "David Scott Trail",
    state: "Meghalaya",
    region: "Northeast",
    difficulty: "Easy",
    duration: "1 day",
    seasons: ["Winter", "Spring", "Autumn"],
    budget: "Under ₹5k",
    altitude: "Low",
    themes: ["Beginner-friendly", "Forest", "Weekend", "Views"],
    startingCity: "Guwahati",
    fitnessLevel: "Beginner",
    safety: "Solo-friendly",
    description: "A historic Khasi Hills trail passing streams, villages, bridges, and gentle meadow sections."
  },
  {
    name: "Living Root Bridges",
    state: "Meghalaya",
    region: "Northeast",
    difficulty: "Moderate",
    duration: "2-3 days",
    seasons: ["Monsoon", "Winter", "Spring"],
    budget: "₹5k-₹10k",
    altitude: "Low",
    themes: ["Forest", "Monsoon", "Adventure", "Views"],
    startingCity: "Guwahati",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A unique Meghalaya trek through rainforest steps, villages, and living root bridge landscapes."
  },
  {
    name: "Mechuka Trek",
    state: "Arunachal Pradesh",
    region: "Northeast",
    difficulty: "Moderate",
    duration: "4-6 days",
    seasons: ["Spring", "Autumn"],
    budget: "₹20k+",
    altitude: "Medium",
    themes: ["Adventure", "Views", "Forest", "Spiritual"],
    startingCity: "Guwahati",
    fitnessLevel: "Regular",
    safety: "Guide recommended",
    description: "A remote Arunachal experience with valleys, monasteries, villages, and open mountain scenery."
  },
  {
    name: "Ziro Valley Trek",
    state: "Arunachal Pradesh",
    region: "Northeast",
    difficulty: "Easy",
    duration: "2-3 days",
    seasons: ["Spring", "Autumn"],
    budget: "₹10k-₹20k",
    altitude: "Medium",
    themes: ["Beginner-friendly", "Views", "Forest"],
    startingCity: "Guwahati",
    fitnessLevel: "Beginner",
    safety: "Guide recommended",
    description: "A relaxed cultural valley trek around Apatani villages, paddy fields, and soft hill views."
  }
];

const defaultFilters = {
  difficulty: "Any",
  region: "Any",
  duration: "Any",
  season: "Any",
  budget: "Any",
  altitude: "Any",
  theme: "Any",
  startingCity: "Any",
  fitnessLevel: "Any",
  safety: "Any"
};

const filterConfig = [
  { key: "difficulty", label: "Difficulty", options: ["Any", "Easy", "Moderate", "Difficult"] },
  { key: "region", label: "Region", options: ["Any", "Himachal", "Uttarakhand", "Kashmir", "Sikkim", "Maharashtra", "Ladakh", "Karnataka", "Kerala", "Northeast"] },
  { key: "duration", label: "Duration", options: ["Any", "1 day", "2-3 days", "4-6 days", "7+ days"] },
  { key: "season", label: "Best season", options: ["Any", "Summer", "Monsoon", "Winter", "Spring", "Autumn"] },
  { key: "budget", label: "Budget", options: ["Any", "Under ₹5k", "₹5k-₹10k", "₹10k-₹20k", "₹20k+"] },
  { key: "altitude", label: "Altitude", options: ["Any", "Low", "Medium", "High"] },
  { key: "theme", label: "Theme", options: ["Any", "Snow", "Lakes", "Forest", "Meadows", "Beginner-friendly", "Weekend", "Adventure", "Monsoon", "Views", "Spiritual"] },
  { key: "startingCity", label: "Starting city", options: ["Any", "Delhi", "Mumbai", "Pune", "Bangalore", "Chandigarh", "Srinagar", "Leh", "Siliguri", "Guwahati", "Kochi"] },
  { key: "fitnessLevel", label: "Fitness level", options: ["Any", "Beginner", "Regular", "Advanced"] },
  { key: "safety", label: "Safety preference", options: ["Any", "Solo-friendly", "Guide recommended", "Group-only"] }
];

const weights = {
  difficulty: 4,
  season: 4,
  fitnessLevel: 4,
  duration: 4,
  region: 2,
  budget: 2,
  altitude: 2,
  theme: 2,
  startingCity: 2,
  safety: 2
};

const popularDefaults = ["Triund", "Nag Tibba", "Kedarkantha", "Dayara Bugyal", "Chopta Tungnath Chandrashila"];

function isMatch(trek, key, value) {
  if (value === "Any") return true;
  if (key === "season") return trek.seasons.includes(value);
  if (key === "theme") return trek.themes.includes(value);
  return trek[key] === value;
}

function scoreTrek(trek, filters) {
  return Object.entries(filters).reduce((total, [key, value]) => {
    if (value === "Any") return total;
    return total + (isMatch(trek, key, value) ? weights[key] : 0);
  }, 0);
}

function selectedFilterLabels(filters) {
  return Object.entries(filters)
    .filter(([, value]) => value !== "Any")
    .map(([key, value]) => ({ key, value, label: filterConfig.find((item) => item.key === key)?.label ?? key }));
}

function matchReason(trek, filters) {
  const selected = selectedFilterLabels(filters);
  if (selected.length === 0) {
    return "A broadly loved India trek with approachable planning, strong scenery, and beginner-to-regular appeal.";
  }

  const matched = selected.filter(({ key, value }) => isMatch(trek, key, value));
  if (matched.length === 0) {
    return "This is the strongest nearby recommendation from the full catalog, though it does not directly match the selected filters.";
  }

  const topMatches = matched.slice(0, 4).map(({ label, value }) => `${label.toLowerCase()} ${value}`);
  return `Matches ${topMatches.join(", ")}${matched.length > 4 ? ", and more" : ""}.`;
}

function App() {
  const [filters, setFilters] = useState(defaultFilters);
  const activeFilters = selectedFilterLabels(filters);
  const hasFilters = activeFilters.length > 0;

  const recommendations = useMemo(() => {
    if (!hasFilters) {
      return popularDefaults.map((name) => treks.find((trek) => trek.name === name));
    }

    return [...treks]
      .map((trek) => ({ ...trek, score: scoreTrek(trek, filters) }))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
      .slice(0, 5);
  }, [filters, hasFilters]);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">India trek discovery</p>
          <h1>Find Your Perfect Trek in India</h1>
          <p className="subtitle">
            Filter by difficulty, season, budget, duration, region, altitude, fitness level, theme, and starting city to find the five treks that fit your trip best.
          </p>
          <div className="heroStats" aria-label="Trek catalog highlights">
            <span><strong>{treks.length}</strong> local treks</span>
            <span><strong>10</strong> filters</span>
            <span><strong>0</strong> external APIs</span>
          </div>
        </div>
      </section>

      <section className="toolShell" aria-label="Trek recommendation filters and results">
        <div className="filtersPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Tune your trip</p>
              <h2>Preferences</h2>
            </div>
            <button className="resetButton" onClick={() => setFilters(defaultFilters)}>Reset filters</button>
          </div>

          <div className="filterGrid">
            {filterConfig.map((filter) => (
              <label className="field" key={filter.key}>
                <span>{filter.label}</span>
                <select value={filters[filter.key]} onChange={(event) => updateFilter(filter.key, event.target.value)}>
                  {filter.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="activeFilters" aria-live="polite">
            {hasFilters ? activeFilters.map(({ key, label, value }) => (
              <span className="pill" key={key}>{label}: {value}</span>
            )) : <span className="hint">Choose any preference to personalize your top 5.</span>}
          </div>
        </div>

        <div className="resultsHeader">
          <div>
            <p className="eyebrow">Top matches</p>
            <h2>{hasFilters ? "Recommended treks" : "Popular starter picks"}</h2>
          </div>
          <p>{hasFilters ? "Ranked by weighted match score." : "A balanced set of beginner and moderate favorites."}</p>
        </div>

        <div className="cardsGrid">
          {recommendations.map((trek, index) => (
            <article className="trekCard" key={trek.name}>
              <div className="cardTop">
                <span className="rank">#{index + 1}</span>
                <span className="score">{hasFilters ? `${trek.score} match pts` : "popular"}</span>
              </div>
              <h3>{trek.name}</h3>
              <p className="location">{trek.state} · {trek.region}</p>
              <p className="description">{trek.description}</p>

              <dl className="metaGrid">
                <div><dt>Difficulty</dt><dd>{trek.difficulty}</dd></div>
                <div><dt>Duration</dt><dd>{trek.duration}</dd></div>
                <div><dt>Season</dt><dd>{trek.seasons.join(", ")}</dd></div>
                <div><dt>Budget</dt><dd>{trek.budget}</dd></div>
                <div><dt>Altitude</dt><dd>{trek.altitude}</dd></div>
                <div><dt>Start</dt><dd>{trek.startingCity}</dd></div>
              </dl>

              <div className="tags">
                {trek.themes.map((theme) => <span key={theme}>{theme}</span>)}
              </div>

              <div className="why">
                <strong>Why it matches</strong>
                <p>{matchReason(trek, filters)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

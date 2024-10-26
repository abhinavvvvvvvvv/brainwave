
            const regionCropMap = {
                central: ["Wheat", "Rice", "Soybean", "Cotton", "Sugarcane","Orange","Potato","Tomato"],
                western: ["Cotton", "Groundnut", "Bajra", "Wheat", "Jowar"],
                eastern: ["Rice", "Jute", "Sugarcane", "Pulses", "Maize"],
                northern: ["Wheat", "Rice", "Barley", "Mustard", "Sugarcane","Apple","Blueberry",
                "Cherry","Peach","Rasberry","Strawberry","Tomato"],
                southern: [
                    "Rice",
                    "Coconut",
                    "Groundnut",
                    "Sugarcane",
                    "Coffee",
                    "Grape",
                    "Pepper"
                ],
            };

            const cropCalendarMap = {
                Orange: {
                Nov: "Preparation for Pruning and Care",
                Dec: "Dormancy and Chill Accumulation",
                Jan: "Bud Development and Pruning",
                Feb: "Flowering and Pollination",
                Mar: "Fruit Set and Early Growth",
                Apr: "Fruit Growth and Irrigation",
                May: "Fruit Growth and Pest Control",
                Jun: "Fruit Development and Irrigation",
                Jul: "Harvesting Begins",
                Aug: "Harvesting Continues and Post-Harvest Care",
                Sep: "Post-Harvest Management",
                Oct: "Preparation for Next Cycle",
                },
                 Peach: {
                     Nov: "Dormancy and Pruning Preparation",
                     Dec: "Dormancy and Chill Accumulation",
                     Jan: "Dormancy and Bud Development",
                     Feb: "Flower Bud Formation",
                     Mar: "Flowering and Pollination",
                     Apr: "Fruit Set and Thinning",
                     May: "Fruit Growth and Irrigation",
                     Jun: "Fruit Growth and Pest Control",
                     Jul: "Harvesting",
                     Aug: "Post-Harvest Care and Fertilization",
                     Sep: "Post-Harvest Management",
                     Oct: "Preparation for Dormancy",
                    },
                 Pepper: {
                     Nov: "Soil Preparation and Planting",
                     Dec: "Seedling Care and Fertilization",
                     Jan: "Transplanting to Field",
                     Feb: "Irrigation and Pest Control",
                     Mar: "Flowering and Fruit Set",
                     Apr: "Fruit Development",
                     May: "Fruit Growth and Harvesting",
                     Jun: "Post-Harvest Care",
                     Jul: "Continued Harvesting",
                     Aug: "Final Harvest and Preparation for Next Cycle",
                     Sep: "Soil Health Maintenance",
                     Oct: "Preparation for Dormancy",
                 },
                 Potato: {
                     Nov: "Soil Preparation and Seed Selection",
                     Dec: "Planting and Initial Care",
                     Jan: "Irrigation and Pest Control",
                     Feb: "Fertilization and Weed Control",
                     Mar: "Continued Irrigation",
                     Apr: "Tuber Development",
                     May: "Irrigation and Pest Control",
                     Jun: "Harvesting Early Varieties",
                     Jul: "Harvesting Main Crop",
                     Aug: "Post-Harvest Storage",
                     Sep: "Soil Health Maintenance",
                     Oct: "Preparation for Next Cycle",
                 },
                 Raspberry: {
                     Nov: "Dormancy and Pruning Preparation",
                     Dec: "Dormancy and Chill Accumulation",
                     Jan: "Bud Development",
                     Feb: "Bud Development and Pruning",
                     Mar: "Flower Bud Formation",
                     Apr: "Flowering and Pollination",
                     May: "Fruit Set and Early Growth",
                     Jun: "Fruit Growth and Irrigation",
                     Jul: "Harvesting Begins",
                     Aug: "Harvesting Continues and Post-Harvest Care",
                     Sep: "Post-Harvest Management",
                     Oct: "Preparation for Next Cycle",
                 },
                 Strawberry: {
                     Nov: "Site Preparation and Planting",
                     Dec: "Winter Care and Mulching",
                     Jan: "Dormancy and Chill Accumulation",
                     Feb: "Bud Development",
                     Mar: "Flowering and Pollination",
                     Apr: "Fruit Set and Early Growth",
                     May: "Fruit Growth and Irrigation",
                     Jun: "Harvesting",
                     Jul: "Harvesting Continues",
                     Aug: "Post-Harvest Management",
                     Sep: "Soil Health Maintenance",
                     Oct: "Preparation for Next Cycle",
                 },
                 Tomato: {
                     Nov: "Soil Preparation and Seedling Care",
                     Dec: "Transplanting to Field",
                     Jan: "Initial Irrigation and Pest Control",
                     Feb: "Flowering and Fertilization",
                     Mar: "Fruit Set and Development",
                     Apr: "Continued Irrigation and Pest Control",
                     May: "Fruit Growth",
                     Jun: "Harvesting Begins",
                     Jul: "Continued Harvesting",
                     Aug: "Post-Harvest Care",
                     Sep: "Final Harvest and Soil Maintenance",
                     Oct: "Preparation for Next Cycle",
                 },
                Grape: {
                Nov: "Preparation for Pruning and Dormancy",
                Dec: "Pruning and Chill Accumulation",
                Jan: "Chill Accumulation and Bud Development",
                Feb: "Bud Break and Early Flowering",
                Mar: "Flowering and Pollination",
                Apr: "Fruit Set and Early Growth",
                May: "Fruit Growth and Irrigation",
                Jun: "Fruit Growth and Irrigation",
                Jul: "Harvesting",
                Aug: "Post-Harvest Care and Pruning",
                Sep: "Post-Harvest Care and Fertilization",
                Oct: "Dormancy Preparation",
                },
                Cherry: {
                Nov: "Dormancy and Chill Accumulation",
                Dec: "Dormancy and Chill Accumulation",
                Jan: "Dormancy and Chill Accumulation",
                Feb: "Pruning and Bud Development",
                Mar: "Bud Break and Early Flowering",
                Apr: "Flowering and Pollination",
                May: "Fruit Set and Early Growth",
                Jun: "Fruit Growth and Irrigation",
                Jul: "Harvesting",
                Aug: "Post-Harvest Care and Pruning",
                Sep: "Post-Harvest Care and Fertilization",
                Oct: "Dormancy Preparation",
                },
                Blueberry: {
                Nov: "Dormancy and Pruning Preparation",
                Dec: "Dormancy and Chill Accumulation",
                Jan: "Dormancy and Chill Accumulation",
                Feb: "Dormancy and Pruning",
                Mar: "Bud Break and Early Flowering",
                Apr: "Flowering and Pollination",
                May: "Fruit Set and Early Growth",
                Jun: "Fruit Growth and Irrigation",
                Jul: "Fruit Growth and Irrigation",
                Aug: "Harvesting and Irrigation",
                Sep: "Harvesting and Post-Harvest Care",
                Oct: "Post-Harvest Care and Dormancy Preparation",
                },
                Apple: {
                Nov: "Dormancy and Pruning Preparation",
                Dec: "Dormancy and Winter Chill Accumulation",
                Jan: "Dormancy and Winter Chill Accumulation",
                Feb: "Dormancy and Pruning",
                Mar: "Flowering Begins",
                Apr: "Flowering and Pollination",
                May: "Fruit Set and Early Growth",
                Jun: "Fruit Growth and Thinning",
                Jul: "Fruit Growth and Irrigation",
                Aug: "Irrigation and Pest Control",
                Sep: "Irrigation and Maturation",
                Oct: "Harvesting",
                },
                Wheat: {
                    Nov: "Sowing",
                    Dec: "Irrigation and Fertilization",
                    Jan: "Irrigation and Pest Control",
                    Feb: "Irrigation and Fertilization",
                    Mar: "Irrigation",
                    Apr: "Irrigation and Pest Control",
                    May: "Harvesting",
                },
                Rice: {
                    Jun: "Sowing",
                    Jul: "Irrigation and Fertilization",
                    Aug: "Irrigation",
                    Sep: "Irrigation and Pest Control",
                    Oct: "Harvesting",
                    Nov: "Land Preparation",
                    Dec: "Fallow",
                },
                Soybean: {
                    Jun: "Sowing",
                    Jul: "Irrigation and Fertilization",
                    Aug: "Pest Control",
                    Sep: "Harvesting",
                    Oct: "Soil Preparation",
                },
                Cotton: {
                    May: "Sowing",
                    Jun: "Irrigation",
                    Jul: "Fertilization",
                    Aug: "Pest Control",
                    Sep: "Harvesting",
                },
                Sugarcane: {
                    Feb: "Planting",
                    Mar: "Irrigation",
                    Apr: "Fertilization",
                    May: "Growth Monitoring",
                    Jun: "Harvesting",
                },
                Groundnut: {
                    Apr: "Sowing",
                    May: "Irrigation",
                    Jun: "Fertilization",
                    Jul: "Pest Control",
                    Aug: "Harvesting",
                },
                Bajra: {
                    May: "Sowing",
                    Jun: "Irrigation",
                    Jul: "Fertilization",
                    Aug: "Harvesting",
                    Sep: "Soil Preparation",
                },
                Jowar: {
                    May: "Sowing",
                    Jun: "Irrigation",
                    Jul: "Fertilization",
                    Aug: "Pest Control",
                    Sep: "Harvesting",
                },
                Jute: {
                    Apr: "Sowing",
                    May: "Irrigation",
                    Jun: "Fertilization",
                    Jul: "Harvesting",
                    Aug: "Post-Harvest Processing",
                },
                Pulses: {
                    Jun: "Sowing",
                    Jul: "Irrigation",
                    Aug: "Fertilization",
                    Sep: "Pest Control",
                    Oct: "Harvesting",
                },
                Maize: {
                    Apr: "Sowing",
                    May: "Irrigation",
                    Jun: "Fertilization",
                    Jul: "Pest Control",
                    Aug: "Harvesting",
                },
                Barley: {
                    Oct: "Sowing",
                    Nov: "Irrigation",
                    Dec: "Fertilization",
                    Jan: "Pest Control",
                    Feb: "Harvesting",
                },
                Mustard: {
                    Sep: "Sowing",
                    Oct: "Irrigation",
                    Nov: "Fertilization",
                    Dec: "Pest Control",
                    Jan: "Harvesting",
                },
                Coconut: {
                    Mar: "Fertilization",
                    Apr: "Irrigation",
                    May: "Pest Control",
                    Jun: "Growth Monitoring",
                    Jul: "Harvesting",
                },
                Coffee: {
                    Sep: "Pruning",
                    Oct: "Irrigation",
                    Nov: "Fertilization",
                    Dec: "Pest Control",
                    Jan: "Harvesting",
                },
            };

            function updateCrops(region) {
                const cropSelect = document.getElementById("crop");
                cropSelect.innerHTML =
                    '<option value="" disabled selected>Select a crop</option>';
                if (region) {
                    const crops = regionCropMap[region];
                    crops.forEach((crop) => {
                        const option = document.createElement("option");
                        option.value = crop;
                        option.textContent = crop;
                        cropSelect.appendChild(option);
                    });
                    cropSelect.disabled = false;
                } else {
                    cropSelect.disabled = true;
                }
            }

            function updateCalendar(crop) {
                const calendar = document.getElementById("calendar");
                calendar.innerHTML = ""; // Clear previous calendar
                if (crop) {
                    const processes = cropCalendarMap[crop];
                    const months = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ];
                    months.forEach((month) => {
                        const box = document.createElement("div");
                        box.className =
                            "calendar-month-box" +
                            (processes[month] ? " process" : " no-process");
                        box.innerHTML = `
                            <strong>${month}</strong>
                            <p>${processes[month] || ""}</p>
                        `;
                        calendar.appendChild(box);
                    });
                } else {
                    const info = document.createElement("p");
                    info.className = "text-gray-700 col-span-3 text-center";
                    info.textContent =
                        "Please select a region and crop to see the crop calendar.";
                    calendar.appendChild(info);
                }
            }

            document
                .getElementById("region")
                .addEventListener("change", function () {
                    updateCrops(this.value);
                    updateCalendar("");
                });

            document
                .getElementById("crop")
                .addEventListener("change", function () {
                    updateCalendar(this.value);
                });
        
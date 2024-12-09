import mongoose from 'mongoose';

const symptomSolutionSchema = new mongoose.Schema({
    symptom: { type: String, required: true },
    image:{
        type:String,
        default : "https://i.pinimg.com/736x/b5/e7/db/b5e7db619ad464cc016acc8be5edf6c4.jpg",
        set: (v)=> v==="" ? "https://i.pinimg.com/736x/b5/e7/db/b5e7db619ad464cc016acc8be5edf6c4.jpg": v,
    },
    solutions: {
        yoga: [
            {
                name: { type: String, required: true }, // Name of the yoga exercise
                benefits: [String], // Array of benefits for this exercise
                howToDo: { type: String, required: true }, // Steps or instructions to perform the exercise
                whenToDo: { type: String }, // Best time to perform the exercise
                image: { type: String, default: "default_yoga_image_url.jpg" }, // Image URL
            },
        ],
        diet: {
            eat: [
                {
                    item: { type: String, required: true }, // Name of the food item
                    benefits: [String], // Health benefits of this item
                    quantity: { type: String }, // Recommended quantity
                    image: { type: String, default: "default_food_image_url.jpg" }, // Image URL
                },
            ],
            avoid: [
                {
                    item: { type: String, required: true }, // Name of the food item
                    reasons: [String], // Reasons why it should be avoided
                    image: { type: String, default: "default_food_image_url.jpg" }, // Image URL
                },
            ],
        },
        homeRemedies: [
            {
                remedy: { type: String, required: true }, // Name or type of remedy
                ingredients: [String], // List of ingredients
                preparation: { type: String, required: true }, // How to prepare the remedy
                benefits: [String], // Benefits of the remedy
                image: { type: String, default: "default_remedy_image_url.jpg" }, // Image URL
            },
        ],
        otcMedications: [
            {
                name: { type: String, required: true }, // Name of the medication
                usage: { type: String, required: true }, // Instructions for usage
                sideEffects: [String], // Possible side effects
                image: { type: String, default: "default_medication_image_url.jpg" }, // Image URL
            },
        ],
        herbalTreatments: [
            {
                herb: { type: String, required: true }, // Name of the herb
                benefits: [String], // Benefits of the herb
                preparation: { type: String }, // How to use or prepare the herb
                precautions: [String], // Precautions or warnings
                image: { type: String, default: "default_herbal_image_url.jpg" }, // Image URL
            },
        ],
    },
});

export const SymptomSolution = mongoose.model("SymptomSolution", symptomSolutionSchema);


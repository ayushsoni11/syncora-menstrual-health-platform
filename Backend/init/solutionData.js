const sampleSolution = [
    {
    "symptom": "Headache",
    "solutions": {
      "yoga": [
        {
          "name": "Child's Pose",
          "benefits": ["Relaxes the mind", "Reduces tension in the back and neck"],
          "howToDo": "Kneel on the floor, stretch your arms forward, and rest your forehead on the ground.",
          "whenToDo": "Morning or evening",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        },
        {
          "name": "Seated Forward Bend",
          "benefits": ["Improves blood flow to the head", "Calms the nervous system"],
          "howToDo": "Sit with your legs extended, lean forward, and try to touch your toes.",
          "whenToDo": "After work or during relaxation time",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        }
      ],
      "diet": {
        "eat": [
          {
            "item": "Bananas",
            "benefits": ["Rich in magnesium", "Helps reduce muscle tension"],
            "quantity": "1-2 bananas daily",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
          },
          {
            "item": "Almonds",
            "benefits": ["Contains riboflavin", "Helps reduce headache frequency"],
            "quantity": "10-15 almonds daily",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
          }
        ],
        "avoid": [
          {
            "item": "Caffeine",
            "reasons": ["May trigger headaches in sensitive individuals"],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
          },
          {
            "item": "Processed Foods",
            "reasons": ["Contain preservatives that may trigger headaches"],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
          }
        ]
      },
      "homeRemedies": [
        {
          "remedy": "Ginger Tea",
          "ingredients": ["Fresh ginger", "Water", "Honey (optional)"],
          "preparation": "Boil water, add ginger slices, and steep for 10 minutes. Add honey if desired.",
          "benefits": ["Reduces inflammation", "Eases headache pain"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        },
        {
          "remedy": "Peppermint Oil Massage",
          "ingredients": ["Peppermint oil"],
          "preparation": "Gently massage a few drops of peppermint oil on your temples.",
          "benefits": ["Soothes headache", "Improves blood flow"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        }
      ],
      "otcMedications": [
        {
          "name": "Paracetamol",
          "usage": "Take 500mg every 6 hours, as needed for pain relief.",
          "sideEffects": ["Nausea", "Dizziness"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        },
        {
          "name": "Ibuprofen",
          "usage": "Take 200mg every 4-6 hours with food.",
          "sideEffects": ["Upset stomach", "Heartburn"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        }
      ],
      "herbalTreatments": [
        {
          "herb": "Lavender Oil",
          "benefits": ["Relieves stress", "Reduces headache severity"],
          "preparation": "Inhale lavender oil by adding a few drops to a diffuser.",
          "precautions": ["Avoid direct skin contact", "Do not ingest"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        },
        {
          "herb": "Feverfew",
          "benefits": ["Prevents migraines", "Reduces headache frequency"],
          "preparation": "Brew feverfew leaves in hot water to make tea.",
          "precautions": ["Avoid during pregnancy", "May cause mild mouth irritation"],
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvvCHf8_f37RTeSjpk_QNe2t4-FtCOTk6KOgwxyxnjj5cuPVZlE5EnvKFJGEIRQEvwTo&usqp=CAU"
        }
      ]
    }
  }
];
  
export default {data : sampleSolution};
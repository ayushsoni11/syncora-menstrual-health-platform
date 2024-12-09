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
  },


  {
    "symptom": "Heavy Flow",
    "solutions": {
      "yoga": [
        {
          "name": "Bridge Pose",
          "benefits": ["Strengthens the pelvic floor", "Improves blood flow to the abdomen"],
          "howToDo": "Lie on your back with your knees bent, feet flat on the floor, and lift your hips toward the ceiling, keeping your shoulders and feet grounded.",
          "whenToDo": "Morning or evening, during menstruation for pelvic relief.",
          "image": "https://th.bing.com/th/id/OIP.B2CO5O_Ii_ddy9GoyiXrwQHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
          "name": "Legs Up the Wall",
          "benefits": ["Relieves pelvic congestion", "Promotes relaxation"],
          "howToDo": "Sit next to a wall, then lie on your back and extend your legs up against the wall, relaxing your arms by your sides.",
          "whenToDo": "Before bed or after long periods of standing to relieve pelvic pressure.",
          "image": "https://th.bing.com/th/id/OIP.bEBxWwur8tzb-bXzL0YpsQHaFy?w=254&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }
      ],
      "diet": {
        "eat": [
          {
            "item": "Leafy Greens",
            "benefits": ["Rich in iron", "Helps replenish lost blood during heavy flow"],
            "quantity": "1-2 servings daily, particularly during menstruation.",
            "image": "https://th.bing.com/th/id/OIP.Ki4ZIKVVJIadDVYWlVCCfgHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          },
          {
            "item": "Pumpkin Seeds",
            "benefits": ["Rich in magnesium", "Helps support muscle relaxation and hormonal balance"],
            "quantity": "1-2 tablespoons daily, particularly during the menstrual phase.",
            "image": "https://th.bing.com/th/id/OIP.B3vtrdCZKW0VgXVVVs_TNgHaE8?w=295&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
        ],
        "avoid": [
          {
            "item": "Caffeine",
            "reasons": ["Can exacerbate menstrual cramps and increase blood flow for some individuals"],
            "image": "https://th.bing.com/th/id/OIP.6n0MbQBRQPyALZEisOYpzQHaFJ?w=285&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          },
          {
            "item": "Alcohol",
            "reasons": ["Can disrupt hormonal balance and exacerbate menstrual symptoms such as heavy bleeding and cramps"],
            "image": "https://th.bing.com/th/id/OIP.cmeRIpf1T5fk9QIUatbHUgHaE8?w=278&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
        ]
      },
      "homeRemedies": [
        {
          "remedy": "Warm Compress",
          "ingredients": ["Warm water", "Cloth"],
          "preparation": "Soak a cloth in warm water and place it on your lower abdomen for 15-20 minutes to relieve cramps and discomfort.",
          "benefits": ["Relieves cramps", "Improves blood circulation and reduces pelvic congestion"],
          "image": "https://th.bing.com/th/id/OIP.MqgOA4pMp98CztM7aqUjfwHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
          "remedy": "Cinnamon Tea",
          "ingredients": ["Cinnamon sticks", "Water", "Honey (optional)"],
          "preparation": "Boil cinnamon sticks in water for 10 minutes, and add honey if desired to sweeten.",
          "benefits": ["Reduces inflammation", "Helps regulate menstrual flow and soothe cramps"],
          "image": "https://th.bing.com/th/id/OIP.1Mvo1ZdMoZpBCmBk9OcPtAHaHa?w=203&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }
      ],
      "otcMedications": [
        {
          "name": "Tranexamic Acid",
          "usage": "Take 500mg three times a day during the heaviest days of your period, as prescribed by your doctor.",
          "sideEffects": ["Nausea", "Dizziness", "Rare clotting issues"],
          "image": "https://th.bing.com/th/id/OIP.NVmQPxDbalm5qrevfo72sQHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
          "name": "Ibuprofen",
          "usage": "Take 200mg every 4-6 hours with food, for pain relief. Use with caution for heavy flow due to its potential to increase bleeding.",
          "sideEffects": ["Upset stomach", "Heartburn", "Risk of bleeding when used in high doses"],
          "image": "https://th.bing.com/th/id/OIP.MwmnbSpU4PLRNx6AUIrxHAHaFS?w=229&h=180&c=7&r=0&o=5&dpr=3.1&pid=1.7"
        }
      ],
      "herbalTreatments": [
        {
          "herb": "Red Clover",
          "benefits": ["Helps balance estrogen", "Regulates menstrual flow and reduces heavy bleeding"],
          "preparation": "Brew red clover flowers in hot water for tea, drink once or twice daily.",
          "precautions": ["Avoid during pregnancy", "May interact with blood-thinning medications"],
          "image": "https://th.bing.com/th/id/OIP.lkBSCtaOEkOEi0qdQZq72gHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
          "herb": "Lady's Mantle",
          "benefits": ["Reduces heavy flow", "Supports hormonal balance and regulates menstruation"],
          "preparation": "Brew lady's mantle leaves in hot water for tea.",
          "precautions": ["Avoid in pregnancy", "Consult with a healthcare provider before use, especially if on hormone treatments"],
          "image": "https://th.bing.com/th/id/OIP.ATTigkAJd7nMO-0DVCymOgHaD4?w=331&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }
      ]
    }
  },

  {
    "symptom": "Cramps",
    "solutions": {
      "yoga": [{
        "name": "Supine Twist",
        "benefits": ["Relaxes tension at lower back ", "Reduces tension in the abdominal area"],
        "howToDo": "Lie on your back, bend one knee, and gently twist it across your body while keeping the shoulders flat on the floor. Hold and switch sides.",
        "whenToDo": "In the evening or before bed for relaxation",
        "image": "https://imgs.search.brave.com/8zINBAVQQwkwfcfcYx32gXh1QZs_U9rnhrQa2Sky6yk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVhbHRoc2hv/dHMuY29tL2hlYWx0/aHNob3RzL2VuL3Vw/bG9hZHMvMjAyNC8w/NC8xMjE5MTgzNy9z/dXBpbmUtc3BpbmFs/LXR3aXN0LXBvc2Ut/MS0zNzB4MjA3Lmpw/Zw"
      },
      {
        "name": "Cobra Pose (Bhujangasana)",
        "benefits": ["Improves blood flow to the abdomen", "Stretches the uterus area, reducing cramps"],
        "howToDo": "Lie on your stomach, place hands under shoulders, and gently lift your chest while keeping elbows bent.",
        "whenToDo": "In the morning for an energy boost or anytime cramps persist.",
        "image": "https://imgs.search.brave.com/CR6JAva2ljsybdkN3Or30n4tLdHgNHfHgFdmgQIrj04/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE5/NjUxNzM2L3Bob3Rv/L2tlZXBpbmctY2Fs/bS1pbi10aGUtY29i/cmEtcG9zZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TEtf/c1lpNld6eExMcjJf/d0xXbnMyUGRfRVdS/bzM2Z2RKM3hWNlpm/ei16bz0"
      }
      ],
      "diet": {
        "eat": [{
          "item": "Dark Chocolate (70% or higher cocoa)",
          "benefits": ["Rich in magnesium", "alleviate cramps inturn improving mood"],
          "quantity": " 1–2 small squares per day as a treat.",
          "image": "https://imgs.search.brave.com/Q3f9IRdFSf6p1iJ9LY_goTDSO2CzURwDYIWBnLbnV-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9udXRy/aXRpb25zb3VyY2Uu/aHNwaC5oYXJ2YXJk/LmVkdS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8xMS9wZXhl/bHMtcGl4YWJheS02/NTg4Mi0xMDI0eDY4/My5qcGc"
        },
        {
          "item": "Chia Seeds",
          "benefits": ["High in omega-3 fatty acids", "Helps reduce inflammation and ease cramps."],
          "quantity": " 1–2 tablespoons added to smoothies, yogurt, or water daily.",
          "image": "https://imgs.search.brave.com/q34rAl5Kw4cyl5un9yV_TNeHREn7NWsMcexoBoa-g_M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc1LzgwLzM2/LzM2MF9GXzc1ODAz/Njk5X1NxRnJKdTZt/ZzV1OFYxVFBWeWVW/aHZNQzlhdFVvN2s3/LmpwZw"
        }
        ],
        "avoid": [{
          "item": "Caffeine",
          "reasons": ["Can constrict blood vessels, worsen bloating, and intensify cramps"],
          "image": "https://imgs.search.brave.com/SYyhTmT_7ckDxwQT-Rs_gX8a6H5llTQ-jDzynYvqQtc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzQ2ODkwOC9waG90/by9jYWZmZWluZS1z/dXBwbGVtZW50cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NHdZNTR4STR3ZWp1/bGJrSERhNF9BNnlL/dEpMRTVlYzNfVFRt/RGlTYXloYz0"
        },
        {
          "item": "Processed Foods",
          "reasons": ["High in sodium, which leads to water retention and increased bloating. "],
          "image": "https://imgs.search.brave.com/mr4UwZLsmGMEYQ05v2PZw-SWdLs92U-c7FfIGgSL2tc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92YXJpZXR5LWp1/bmstZm9vZF8xMDU3/Mzg5LTExODYyOS5q/cGc_c2VtdD1haXNf/aHlicmlk"
        }
        ]
      },
      "homeRemedies": [{
        "remedy": "Ginger Tea",
        "ingredients": ["Fresh ginger", "Water", "Honey (optional)"],
        "preparation": "Boil water, add ginger slices, and steep for 10 minutes. Add honey if desired.",
        "benefits": ["Reduces inflammation", "Eases cramp pain"],
        "image": "https://imgs.search.brave.com/jyDQ5VOPG6LJWfSep_ZX3eoCm9XdETTUezZYCXy-Pa8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcw/NDg4MDQzL3Bob3Rv/L2dpbmdlci10ZWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXpNYlBkYnR1YmNo/TS15dTJLVW1udDRG/Q1hldGR6dUZUYWVH/b1pCZVJMMXc9"
      },
      {
        "remedy": "Hot Water Compress",
        "ingredients": ["Hot water, a cloth or hot water bag"],
        "preparation": "Fill the bag with hot water or dip a cloth in hot water, wring out the excess, and place it on the lower abdomen.",
        "benefits": ["Relaxes muscles", "Improves blood flow"],
        "image": "https://imgs.search.brave.com/tW_k_it7gcLVdW_F0Ipci9zxvW6zsOV5qc_cAnUfLlY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxWEdXeGdwT3BM/LmpwZw"
      }
      ],
      "otcMedications": [{
        "name": "Naproxen",
        "usage": "Take 220 mg every 8–12 hours for pain and inflammation.",
        "sideEffects": ["Heartburna", "Headache", "Dizziness"],
        "image": "https://imgs.search.brave.com/2aPPtJgnMv9PreHUDq-zMg2FZ8IjRBqeRQE4UYFJ64g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy96YmVkdXky/Mi9wcm9kdWN0aW9u/LzVmZTQ2Mzg1MjY1/ZWZmMjk2YTk3MTIy/NzA0YjAzZDdlOTUy/NWRhODAtNjAweDYw/MC5qcGc"
      },
      {
        "name": "Ibuprofen",
        "usage": "Take 200mg every 4-6 hours with food.",
        "sideEffects": ["Upset stomach", "Heartburn"],
        "image": "https://imgs.search.brave.com/Vf6oDwHKEYXpmzKF8ij5SDi4XdTSlBFsEGreGXNqpyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI3LzAyLzQ4/LzM2MF9GXzEyNzAy/NDg3NF9JOGFPRHRZ/VjFaWTZ5clBFSFJi/bzNFMlN4NmIyWjJq/aC5qcGc"
      }
      ],
      "herbalTreatments": [{
        "herb": "Chamomile",
        "benefits": ["Reduces uterine contractions and promotes relaxation.", "Reduces cramp severity"],
        "preparation": "Steep 1 chamomile tea bag or 1 teaspoon of dried chamomile in hot water for 5–7 minutes",
        "precautions": [" Avoid if allergic to ragweed or daisies."],
        "image": "https://imgs.search.brave.com/prNTuA-ifQcy22Mpqgb1JHodm49L1XPKlsDIMOC39Js/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODE3/ODAwMzQyL3Bob3Rv/L2NoYW1vbWlsZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/M3E3WDVfd0s0MVdu/bTJYbVpwUDJvUEwy/YTcyMEJYdWJFVmwx/TURXOWVQWT0"
      },
      {
        "herb": "Fenugreek Seeds",
        "benefits": ["Helps in reducing menstrual pain and inflammation.", "Reduces cramp "],
        "preparation": " Soak 1 teaspoon of fenugreek seeds in water overnight and drink the water in the morning.",
        "precautions": ["Avoid excessive consumption as it may cause diarrhea or nausea."],
        "image": "https://imgs.search.brave.com/txSLB2YZMqPc2PcXRIyUEGj38Qwonq6Xj80g0OWb0cs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg3LzQ0LzU4/LzM2MF9GXzI4NzQ0/NTg1MF9QdTJObTFH/UXVBM1ZTNWxyTUp4/aGE5WkdDdjFBT3pL/ZS5qcGc"
      }
      ]
    }
  },

  {
    "symptom": "Bloating",
    "solutions": {
      "yoga": [{
        "name": "Bridge Pose (Setu Bandhasana)",
        "benefits": ["Stimulates digestion ", "Reduces bloating by improving blood circulation."],
        "howToDo": " Lie on your back, bend your knees, place feet hip-width apart, and lift your hips while keeping arms by your sides.",
        "whenToDo": "Morning or evening for 5–10 minutes to ease bloating.",
        "image": "https://imgs.search.brave.com/3IWVgKGtp_Kxxfx1Lkq04NxSOCEJ2WCwZLhasyckFi8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20veW9nYTE1/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wOC9zdXBw/b3J0ZWQtYnJpZGdl/LWFiaS1jYXJ2ZXIt/eWluLmpwZz9maXQ9/MTAyNCw2ODMmc3Ns/PTE"
      },
      {
        "name": "Seated Forward Bend (Paschimottanasana)",
        "benefits": ["Aids in digestion and releases trapped gas."],
        "howToDo": "Sit with legs straight, reach forward to hold your feet or shins, and hold the stretch while breathing deeply.",
        "whenToDo": "Post-meal or before bed to relieve discomfort.",
        "image": "https://imgs.search.brave.com/1mwW9Tz6yAAAX_5qNdDEHgYfBwXndJ7h_YXw24Z8CEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS55b2dhdW9ubGlu/ZS5jb20vYXBwL3Vw/bG9hZHMvMjAyMy8x/MC8wMjAwNDkxNS8w/LUltYWdlLW9mLVN1/cHBvcnRlZC1TZWF0/ZWQtRm9yd2FyZC1C/ZW5kLndlYnA"
      }
      ],
      "diet": {
        "eat": [{
          "item": "Papaya",
          "benefits": ["Contains papain", "aids digestion and reduces bloating"],
          "quantity": " 1 cup of fresh papaya daily, preferably after meals.",
          "image": "https://imgs.search.brave.com/rtqi08wOPzzLbodcXzezWcHgtz_yb0GNPf51gcR9IAw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE1/ODMyODE2L3Bob3Rv/L3BhcGF5YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SHNH/dkpNTWZEcnhtcHRl/ZWh1WEdQTTdkbm00/SXdLV1FYc29ub05l/eWdxZz0"
        },
        {
          "item": "Cucumber",
          "benefits": ["High water content helps reduce bloating and flush out toxins"],
          "quantity": " 1 medium cucumber, sliced, as a snack or added to meals.",
          "image": "https://imgs.search.brave.com/zFsdHFHl7w3Gt_CXq2BNFIED3skphy5NQ1WO8-8fIw8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE3LzQ0LzYz/LzM2MF9GXzExNzQ0/NjMyN19JVUl1ak02/aGtCUU9iSUtrdFJ1/d2VSbFlmTVpXRDVi/TS5qcGc"
        }
        ],
        "avoid": [{
          "item": "Carbonated Drinks",
          "reasons": ["Causes gas build-up in the stomach, worsening bloating."],
          "image": "https://imgs.search.brave.com/WDqIRsMmvwW9E7WBdv2q0k2NglRJEgWwXsiuthYxEH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMy8wNy9vcmFu/Z2UtZHJpbmstYjY3/ZDM4Ny5qcGc_cXVh/bGl0eT05MCZyZXNp/emU9NDQwLDQwMA"
        },
        {
          "item": "Fried Foods",
          "reasons": ["High fat content slows digestion and increases bloating "],
          "image": "https://imgs.search.brave.com/KopoXG_XggnalRpWINzctGYknSQrBpP8T2Ger-C_12A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kZWxp/c2gtbGVuYS15dC1m/cmllcy0wMDctMTY2/NjEyODE3OC5qcGc_/Y3JvcD0wLjMzN3h3/OjEuMDB4aDswLjE0/Mnh3LDAmcmVzaXpl/PTk4MDoq"
        }
        ]
      },
      "homeRemedies": [{
        "remedy": "Fennel Tea",
        "ingredients": [" teaspoon fennel seeds", "1 cup water", "Honey (optional)"],
        "preparation": "Boil fennel seeds in water for 5 minutes, strain, and sip slowly. Add honey if desired.",
        "benefits": ["Relieves gas and soothes the digestive system.", "Eases bloating"],
        "image": "https://imgs.search.brave.com/lYjB7cKqZIwYDh95xuW9ENc_QDNnpaOdOyy0zgXNO3c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3VyZWpv/eS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMDEvRmVu/bmVsLVNlZWQtVGVh/LUZvci1EaWdlc3Rp/b24tQW5kLVdlaWdo/dC1Mb3NzX2Z0Lmpw/Zz9yZXNpemU9Njk2/LDM2NCZzc2w9MQ"
      },
      {
        "remedy": "Apple Cider Vinegar (ACV)",
        "ingredients": [" 1 tablespoon ACV", " 1 cup warm water ", " 1 teaspoon honey (optional)"],
        "preparation": "Mix ACV and honey in warm water and drink before meals.",
        "benefits": [" Improves digestion", "Improves bloating"],
        "image": "https://imgs.search.brave.com/Hn0HpkGrJ8SJXM9I692aaFvXqMJCBgPAyq9gYx4YkRc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWNoaWNhZ29tZWRp/Y2luZS5vcmcvX25l/eHQvaW1hZ2U_dXJs/PWh0dHBzOi8vZWRn/ZS5zaXRlY29yZWNs/b3VkLmlvL3VuaWNo/aWNhZ29tYy04MW5i/cW5iMy9tZWRpYS9p/bWFnZXMvdWNtYy9m/b3JlZnJvbnQvZ2Vu/ZXJhbC91bml2ZXJz/YWwvYXBwbGUtY2lk/ZXItdmluZWdhci11/bml2ZXJzYWwtODMy/eDQ2OS5qcGc_c2Nf/bGFuZz1lbiZ3PTE0/NDQmcT03NQ"
      }
      ],
      "otcMedications": [{
        "name": "Simethicone (Gas-X)",
        "usage": "Take 40–125 mg after meals and at bedtime as needed to relieve gas.",
        "sideEffects": ["Rare but may cause mild diarrhea or nausea."],
        "image": "https://imgs.search.brave.com/60QYxkwaZEXDZgrdIrFjh1IZIFVnU5ptB7psCe7Sfb4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhL2Zi/ZmZiMjA1LTk5ZmUt/NDhjZi05NWE2LWY2/MGY0ZjE2N2Y3OS5f/X0NSMCwwLDE0NjQs/NjAwX1BUMF9TWDE0/NjRfVjFfX18uanBn"
      },
      {
        "name": "Activated Charcoal",
        "usage": "Take 500–1,000 mg as directed for reducing gas and bloating",
        "sideEffects": ["May cause black stools or constipation in some cases."],
        "image": "https://imgs.search.brave.com/53mCAkHDOxJwGxg8YbuO80pVd2-ZZEzlFGDxt2kpQEw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFwTFN5MXdwSUwu/anBn"
      }
      ],
      "herbalTreatments": [{
        "herb": "Peppermint",
        "benefits": ["Relaxes the digestive tract and eases gas and bloating.", "Reduces bloating severity"],
        "preparation": "Steep 1 teaspoon dried peppermint leaves or 1 peppermint tea bag in hot water for 5–7 minutes.",
        "precautions": [" Avoid if you have acid reflux, as it may worsen symptoms."],
        "image": "https://imgs.search.brave.com/_nGXUjyNkl6xTKvoLnWXJB0VNzZ4wc3uWnmfDngN0-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5uY2NpaC5uaWgu/Z292L3BlcHBlcm1p/bnQtc3RldmVuLWZv/c3Rlci1zcXVhcmUu/anBn"
      },
      {
        "herb": "Ginger",
        "benefits": ["Stimulates digestive enzymes.", " Reduces bloating and nausea."],
        "preparation": " Grate 1-inch fresh ginger, boil in 1 cup water for 5 minutes, strain, and drink.",
        "precautions": ["Excessive consumption may cause heartburn or irritation."],
        "image": "https://imgs.search.brave.com/TJNT7jZ3qFAQjTfF1zgAgcGnMwsx6Vpv4fiS1g_tgC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUx/NTI5Mzk5L3Bob3Rv/L2dpbmdlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y0tF/aHZQMzQxYWxqWDNT/amZBdXZ0VHg5b0FI/aWhyRG9vbldEQ2xK/SGJqRT0"
      }
      ]
    }
  },


  



];

export default { data: sampleSolution };
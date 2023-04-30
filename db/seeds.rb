# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {
        username: 'atlanta',
        password: 'atlanta',
        bio: 'just a girl who loves skin care and spending too much money <3'
    },
    {
        username: 'jessica1995',
        password: 'jessica',
        bio: 'obsessed with my 10 step skincare. Lover of YouthToThePeople. Don\'t tell my husband how much this all costs lol'
    },
    {
        username: 'bellavella',
        password: 'bellavella',
        bio: 'I\'m Bella and I\'m all about skin care and getting that natural glow. As someone who\'s struggled with skin issues in the past, I\'ve become passionate about finding the best products and routines for healthy, happy skin. Join me on my journey to radiant skin!'
    },
    {
        username: 'SkincarePeach',
        password: 'SkincarePeach',
        bio: 'Hey there! I\'m all about skin care - it\'s my passion and my profession! I love helping people look and feel their best by providing top-notch skin care advice and products. Whether you\'re struggling with acne or just want to take better care of your skin, I\'m here to help! Follow me for tips, tricks, and all kinds of skin care goodies. Let\'s get glowing!'
    }
])

Wishlist.create([
    {
        user_id: 1
    },
    {
        user_id: 2
    },
    {
        user_id: 3
    },
    {
        user_id: 4
    },
    
])


Product.create([
    {
        name: 'Alpha Beta Extra Strength Daily Peel',
        category: 'Exfoliant',
        description: 'A two-step AHA/BHA peel pad pre-dosed with seven acids and 12 antioxidants to clear the complexion, reduce the look of wrinkles, and visibly improve skin tone and texture.',
        brand: 'Dr Dennis Goss',
        image: './Photos/DrDennisGoss_AlphaBeta_Daily_Peel.jpg'
    },
    {
        name: 'Lala Retro Whipped Moisturizer',
        category: "Moisturizer",
        description: 'Tthis multifaceted rescue cream, infused with a triple-ceramide blend and five African oils, provides replenishing barrier support by reinforcing skin’s acid mantle and defending against the effects of everyday stressors.',
        brand: 'Drunk Elephant',
        image: './Photos/DrunkElephant_Lala_Retro_Moisturizer.png'
    },
    {
        name: 'Protini Polypeptide Moisturizer',
        category: 'Moisturizer',
        description: 'This protein moisturizer combines signal peptides, growth factors, amino acids, and pygmy waterlily to improve the appearance of skin’s tone, texture, and firmness.',
        brand: 'Drunk Elephant',
        image: './Photos/DrunkElephant_Protini_Moisturizer.png'
    },
    {
        name: 'Watermelon Glow Niacinamide Dew Drops',
        category: "Serum",
        description: 'A breakthrough, multi-use highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast.',
        brand: 'Glow Recipe',
        image: './Photos/Glow_Recipe_Dew_Drops.png'
    },
    {
        name: 'Daily UV Defense Sunscreen',
        category: 'Sunscreen',
        description: 'A lightweight, daily Broad Spectrum SPF 36 sunscreen delivering invisible sun protection while hydrating and soothing skin - no white-cast, just glow!',
        brand: 'innisfree',
        image: './Photos/innisfree_sunscreen.png'
    },
    {
        name: 'BHA Liquid Exfoliant',
        category: 'Exfoliant',
        description: 'A daily leave-on exfoliant with two percent salicylic acid to sweep away dead skin cells, unclog pores, and visibly smooth wrinkles—practically overnight.',
        brand: "Paula's Choice",
        image: './Photos/Paula\'s_Choice_BHA_liquid_exfoliant.png'
    },
    {
        name: 'Unseen Sunscreen',
        category: 'Sunscreen',
        description: 'A totally invisible, weightless, scentless, and makeup-gripping daily primer with SPF 40.',
        brand: 'SuperGoop',
        image: './Photos/supergood_unseen_sunscreen.png'
    },
    {
        name: 'AHA 30% BHA 2% Peeling Solution',
        category: 'Exfoliant',
        description: 'An exfoliating solution to help fight visible blemishes and improve the look of skin texture and radiance.',
        brand: "The Ordinary",
        image: './Photos/the_ordinary_AHA30_BHA2.png'
    },
    {
        name: "Retinol in Squalane",
        category: 'Serum',
        description: 'A moderate-strength retinol serum that targets general signs of skin aging.',
        brand: 'The Ordinary',
        image: './Photos/the_ordinary_Retinol_squalane.png'
    },
    {
        name: 'Superfood Cleanser',
        category: 'Cleanser',
        description: 'An award-winning face wash with superfood extracts to remove makeup, support skin\'s pH balance, and clear buildup in pores that can lead to blemishes.',
        brand: 'Youth to the People',
        image: './Photos/YTP_superfood_cleanser.png'
    },
    {
        name: "Squalene + Retinol Night Serum",
        category: 'Serum',
        description: 'An innovative formula with an encapsulated duo of time-release retinol and retinal, clinically shown to improve the appearance of fine lines and wrinkles, discoloration, and texture, with minimal irritation.',
        brand: 'Biossance',
        image: './Photos/Biossance_Squalene+Retinol_Night_Serum.png'
    },
    {
        name: "Squalane + 10% Lactic Acid Resurfacing Serum",
        category: 'Serum',
        description: 'An award-winning serum clinically shown to deliver dramatically visibly smoother, softer, brighter skin—powered by safe, potent 10% lactic acid.',
        brand: 'Biossance',
        image: './Photos/Biossance_Squalene_Lactic_Acid.png'
    },
    {
        name: "Squalane Cleanser",
        category: 'Cleanser',
        description: 'A gentle, moisturizing facial cleanser.',
        brand: 'The Ordinary',
        image: './Photos/The_ordinary_squalane_cleanser.png'
    },
    {
        name: "RESIST Perfectly Balanced Foaming Cleanser",
        category: 'Cleanser',
        description: 'A gentle, soap-free foaming cleanser formulated to thoroughly rinse away excess oil, makeup, and sunscreen without disturbing your skin’s protective barrier.',
        brand: 'Paula\'s Choice',
        image: './Photos/Paula\'s_Choice_Foaming_Cleanser.png'
    },
    {
        name: "Avocado Ceramide Moisture Barrier Cleanser",
        category: 'Cleanser',
        description: 'A hydrating, skin-barrier-strengthening cleanser packed with ceramides and pre- and postbiotics to balance the skin’s moisture barrier while effectively removing makeup',
        brand: 'Glow Recipe',
        image: './Photos/Glow_Recipe_Avocado_Cleanser.png'
    },
    {
        name: "Hyaluronic Acid 2% + B5 Hydrating Serum",
        category: 'Serum',
        description: 'A hydrating formula with ultra-pure, vegan hyaluronic acid.',
        brand: 'The Ordinary',
        image: './Photos/the_ordinary_Hyaluronic_Acid.png'
    },
    {
        name: "Honey Halo Ultra-Hydrating Ceramide Moisturizer",
        category: 'Moisturizer',
        description: 'An ultra-hydrating ceramide moisturizer clinically proven to visibly plump, improve the look of fine lines and replenish dry, distressed skin.',
        brand: 'Farmacy',
        image: './Photos/farmacy_moisturizer.png'
    }
])


Review.create!([
    {
        user_id: 2,
        product_id: 2,
        rating: 5,
        info: "I have been using this moisturizer for the past few months and it has done wonders for my skin. It is incredibly hydrating and nourishing, leaving my face feeling soft and supple all day long. I have noticed a significant improvement in the texture of my skin, as well as a decrease in dryness. It's one of the best skincare products I have ever used!"
    },
    {
        user_id: 3,
        product_id: 2,
        rating: 4,
        info: 'I\'ve been using this moisturizer for about a month now and it\'s definitely become one of my favorite skincare products. It\'s perfect for my skin type, as it doesn\'t clog pores or cause breakouts. It also provides long-term hydration and doesn\'t leave an oily residue. So far, I\'m really happy with the results and would highly recommend this product to anyone looking for a great moisturizer!'
    },
    {
        user_id: 4,
        product_id: 2,
        rating: 5,
        info: 'I have been using this moisturizer for a few weeks now and it\'s great! My skin has never felt so soft and hydrated. The product absorbs quickly, doesn\'t leave a greasy residue, and smells wonderful. It\'s affordable too - the perfect combination of luxury and practicality. All in all, it\'s an excellent skincare product that I would definitely recommend to others!'
    }
])


p "Created #{User.count} users"
p "Created #{Product.count} products"
p "Created #{Review.count} reviews"
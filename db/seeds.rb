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


Product.create([
    {
        name: 'Alpha Beta Extra Strength Daily Peel'
        category: 'Exfoliant'
        description: 'A two-step AHA/BHA peel pad pre-dosed with seven acids and 12 antioxidants to clear the complexion, reduce the look of wrinkles, and visibly improve skin tone and texture.'
        brand: 'Dr Dennis Goss'
        image: 'client/public/Photos/DrDennisGoss AlphaBeta Extra Strength Daily Peel.jpg'
    },
    {
        name: 'Lala Retro Whipped Moisturizer'
        category: "Moisturizer"
        description: 'Tthis multifaceted rescue cream, infused with a triple-ceramide blend and five African oils, provides replenishing barrier support by reinforcing skin’s acid mantle and defending against the effects of everyday stressors.'
        brand: 'Drunk Elephant'
        image: 'client/public/Photos/Drunk Elephant Lala Retro Moisturizer.png'
    },
    {
        name: 'Protini Polypeptide Moisturizer'
        category: 'Moisturizer'
        description: 'This protein moisturizer combines signal peptides, growth factors, amino acids, and pygmy waterlily to improve the appearance of skin’s tone, texture, and firmness.'
        brand: 'Drunk Elephant'
        image: 'client/public/Photos/DrunkElephant Protini Moisturizer.png'
    },
    {
        name: 'Watermelon Glow Niacinamide Dew Drops'
        category: "Serum"
        description: 'A breakthrough, multi-use highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast.'
        brand: 'Glow Recipe'
        image: 'client/public/Photos/Glow Recipe Watermelon Glow Niacinamide Dew Drops.png'
    },
    {
        name: 'Daily UV Defense Sunscreen'
        category: 'Sunscreen'
        description: 'A lightweight, daily Broad Spectrum SPF 36 sunscreen delivering invisible sun protection while hydrating and soothing skin - no white-cast, just glow!'
        brand: 'innisfree'
        image: 'client/public/Photos/innisfree Daily UV Defense sunscreen.png'
    },
    {
        name: 'BHA Liquid Exfoliant'
        category: 'Exfoliant'
        description: 'A daily leave-on exfoliant with two percent salicylic acid to sweep away dead skin cells, unclog pores, and visibly smooth wrinkles—practically overnight.'
        brand: "Paula's Choice"
        image: 'client/public/Photos/Paula\'s Choice BHA liquid exfoliant.png'
    },
    {
        name: 'Unseen Sunscreen'
        category: 'Sunscreen'
        description: 'A totally invisible, weightless, scentless, and makeup-gripping daily primer with SPF 40.'
        brand: 'SuperGoop'
        image: 'client/public/Photos/supergood unseen sunscreen.png'
    },
    {
        name: 'AHA 30% BHA 2% Peeling Solution'
        category: 'Exfoliant'
        description: 'An exfoliating solution to help fight visible blemishes and improve the look of skin texture and radiance.'
        brand: "The Ordinary"
        image: 'client/public/Photos/the ordinary AHA30% BHA2% peeling solution.png'
    },
    {
        name: "Retinol in Squalane"
        category: 'Serum'
        description: 'A moderate-strength retinol serum that targets general signs of skin aging.'
        brand: 'The Ordinary'
        image: 'client/public/Photos/the ordinary Retinol in squalane.png'
    },
    {
        name: 'Superfood Cleanser'
        category: 'Cleanser'
        description: 'An award-winning face wash with superfood extracts to remove makeup, support skin\'s pH balance, and clear buildup in pores that can lead to blemishes.'
        brand: 'Youth to the People'
        image: 'client/public/Photos/YTP superfood cleanser.png'
    },
    {
        name: "Squalene + Retinol Night Serum"
        category: 'Serum'
        description: 'An innovative formula with an encapsulated duo of time-release retinol and retinal, clinically shown to improve the appearance of fine lines and wrinkles, discoloration, and texture, with minimal irritation.'
        brand: 'Biossance'
        image: 'client/public/Photos/Biossance Squalene+Retinol Night Serum.png'
    },
    {
        name: "Squalane + 10% Lactic Acid Resurfacing Serum"
        category: 'Serum'
        description: 'An award-winning serum clinically shown to deliver dramatically visibly smoother, softer, brighter skin—powered by safe, potent 10% lactic acid.'
        brand: 'Biossance'
        image: 'client/public/Photos/Biossance Squalene + 10% Lactic Acid.png'
    },
    {
        name: "Squalane Cleanser"
        category: 'Cleanser'
        description: 'A gentle, moisturizing facial cleanser.'
        brand: 'The Ordinary'
        image: 'client/public/Photos/The ordinary squalane cleanser.png'
    },
    {
        name: "RESIST Perfectly Balanced Foaming Cleanser"
        category: 'Cleanser'
        description: 'A gentle, soap-free foaming cleanser formulated to thoroughly rinse away excess oil, makeup, and sunscreen without disturbing your skin’s protective barrier.'
        brand: 'Paula\'s Choice'
        image: 'client/public/Photos/Paula\'s Choice Perfectly Balanced Foaming Cleanser.png'
    },
    {
        name: "Avocado Ceramide Moisture Barrier Cleanser"
        category: 'Cleanser'
        description: 'A hydrating, skin-barrier-strengthening cleanser packed with ceramides and pre- and postbiotics to balance the skin’s moisture barrier while effectively removing makeup.'
        brand: 'Glow Recipe'
        image: 'client/public/Photos/Glow Recipe Avocado Cleanser.png'
    },
    {
        name: ""
        category: ''
        description: ''
        brand: ''
        image: ''
    },
    {
        name: ""
        category: ''
        description: ''
        brand: ''
        image: ''
    },
])


p "Created #{User.count} users"
p "Created #{Product.count} products"
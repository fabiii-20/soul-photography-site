/* eslint-disable @typescript-eslint/no-require-imports */
// seed-simple.js
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...\n');

  // Clean up
  await prisma.photo.deleteMany();
  await prisma.gallery.deleteMany();
  await prisma.client.deleteMany();
  await prisma.ad.deleteMany();
  await prisma.hireRequest.deleteMany();

  // Create Client
  const hashedPassword = await bcrypt.hash('password123', 10);
  const client = await prisma.client.create({
    data: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test Client',
    }
  });

  console.log('Created Client: test@example.com / password123');

  // Create galleries with photos
  const gallery1 = await prisma.gallery.create({
    data: {
      title: 'Wedding Photography 2024',
      description: 'Capturing beautiful moments of love and celebration',
      coverUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      premium: false,
      photos: {
        create: [
          {
            title: 'Ceremony Moment',
            imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
            beforeUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
            afterUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
            category: 'wedding',
          },
          {
            title: 'First Dance',
            imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
            category: 'wedding',
          },
        ],
      },
    },
  });

  const gallery2 = await prisma.gallery.create({
    data: {
      title: 'Portrait Sessions',
      description: 'Professional headshots and creative portraits',
      coverUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
      premium: true,
      clientId: client.id, // Assign to client
      teaserUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      photos: {
        create: [
          {
            title: 'Studio Portrait',
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
            beforeUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
            afterUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
            category: 'portrait',
          },
        ],
      },
    },
  });

  const gallery3 = await prisma.gallery.create({
    data: {
      title: 'Cinematic Archive',
      description: 'A selection of high-impact cinematic captures by Abin Ahmed.',
      coverUrl: '/portfolio/vintage_radio.jpg',
      premium: false,
      photos: {
        create: [
          {
            title: 'Vintage Radio',
            imageUrl: '/portfolio/vintage_radio.jpg',
            category: 'cinematic',
          },
          {
            title: 'Butterfly Detail',
            imageUrl: '/portfolio/butterfly.jpg',
            category: 'nature',
          },
          {
            title: 'Protest Narrative',
            imageUrl: '/portfolio/protest.jpg',
            category: 'storytelling',
          },
          {
            title: 'Nature Green',
            imageUrl: '/portfolio/nature_green.jpg',
            category: 'nature',
          },
          {
            title: 'White Flowers with Droplets',
            imageUrl: '/portfolio/flowers_droplets.jpg',
            category: 'nature',
          },
        ],
      },
    },
  });

  // Create ads
  await prisma.ad.createMany({
    data: [
      {
        slotName: 'sidebar_top',
        type: 'image',
        content: 'https://via.placeholder.com/300x250',
        active: true,
      },
    ],
  });

  console.log('✅ Seed complete!');
  console.log('Created Galleries:', gallery1.title, gallery2.title, gallery3.title);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

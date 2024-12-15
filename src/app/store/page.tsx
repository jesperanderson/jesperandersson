// src/app/store/page.tsx
const storeItems = [
  {
    title: 'Website Template 1',
    description: 'A clean and modern design perfect for startups.',
    price: '$199',
    imageUrl: '/images/template1.jpg',
  },
  {
    title: 'Website Template 2',
    description: 'A professional template with e-commerce support.',
    price: '$299',
    imageUrl: '/images/template2.jpg',
  },
  {
    title: 'Website Template 3',
    description: 'A minimalist design with focus on content.',
    price: '$149',
    imageUrl: '/images/template3.jpg',
  },
];

export default function StoreSection() {
  return (
    <section className="store-section">
      {storeItems.map((item, index) => (
        <div key={index} className="store-card">
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p className="price">{item.price}</p>
          <button>Order Now</button>
        </div>
      ))}
    </section>
  );
}
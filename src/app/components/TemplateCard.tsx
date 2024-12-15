// src/components/TemplateCard.tsx

interface TemplateCardProps {
    template: {
      title: string;
      description: string;
      price: string;  // Added price
      demoLink: string;
      imageUrl: string;
    };
  }
  
  const TemplateCard = ({ template }: TemplateCardProps) => (
    <div className="template-card">
      <img src={template.imageUrl} alt={template.title} />
      <h3>{template.title}</h3>
      <p>{template.description}</p>
      <p><strong>{template.price}</strong></p>  {/* Display price */}
      <a href={template.demoLink} target="_blank" rel="noopener noreferrer">
        View Demo
      </a>
    </div>
  );
  
  export default TemplateCard;
  
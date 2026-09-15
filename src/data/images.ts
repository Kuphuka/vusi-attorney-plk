export type ImageAsset = {
  src: string
  alt: string
}

export const images = {
  hero: { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85', alt: 'Lawyer reviewing documents in a refined office' },
  about: { src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85', alt: 'Law books and legal documents on a desk' },
  practice: [
    { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85', alt: 'Legal papers and a fountain pen' },
    { src: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=85', alt: 'Justice scales on a legal desk' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85', alt: 'Professional team collaborating in an office' },
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85', alt: 'Contract documents being reviewed' },
    { src: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85', alt: 'Financial documents and calculator' },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85', alt: 'Professional property exterior' },
  ] as ImageAsset[],
  office: [
    { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85', alt: 'Placeholder office interior with warm light' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85', alt: 'Placeholder reception and open office' },
    { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85', alt: 'Placeholder modern consultation room' },
    { src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=85', alt: 'Placeholder boardroom with a long table' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85', alt: 'Placeholder professional building exterior' },
  ] as ImageAsset[],
}

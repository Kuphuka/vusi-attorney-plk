export type ImageAsset = {
  src: string
  alt: string
}

export const images = {
  hero: { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85', alt: 'Legal books and courtroom scales' },
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
    { src: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1600&q=85', alt: 'Justice scales representing South African court proceedings' },
    { src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85', alt: 'Law books and legal documents' },
    { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85', alt: 'Legal papers prepared for court' },
  ] as ImageAsset[],
}

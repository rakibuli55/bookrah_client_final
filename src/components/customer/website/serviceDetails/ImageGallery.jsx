const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Salon main area with modern chairs',
      className: 'col-span-2 row-span-2',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Salon section with black chairs',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Salon chairs and lighting',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Close-up of salon chair and lighting',
      className: 'col-span-1 row-span-1',
    },
  ];

  return (
    <div className="mb-12">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[400px]">
        {images.map((image) => (
          <div
            key={image.id}
            className={`${image.className} rounded-lg overflow-hidden`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

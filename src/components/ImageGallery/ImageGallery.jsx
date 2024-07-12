import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard imgUrl={item.urls.small} imgAlt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
}

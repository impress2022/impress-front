export default function BasicPage({ content }) {
  return (
    <div className="wysiwyg md:grid md:grid-cols-12 mt-24 mb-500">
      <div className="md:col-span-2" />
      <div
        className="md:col-span-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="md:col-span-2" />
    </div>
  );
}

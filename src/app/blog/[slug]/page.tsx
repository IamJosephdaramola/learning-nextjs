export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function Page({ params }: { params: { slug: string } }) {
	return <div>My Post</div>;
}

const BookCard = ({ book }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md bg-white">
            <img src={book.image} alt={book.name} className="w-full h-48 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-bold">{book.name}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-500">Type: {book.genre}</p>
        </div>
    );
};

export default BookCard;

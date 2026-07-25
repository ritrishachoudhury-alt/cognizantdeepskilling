import java.util.*;

public class LibraryManagement {

    // Linear Search
    public static Book linearSearch(Book[] books, String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null;
    }

    // Binary Search
    public static Book binarySearch(Book[] books, String title) {

        int low = 0;
        int high = books.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = books[mid].getTitle().compareToIgnoreCase(title);

            if (compare == 0)
                return books[mid];

            if (compare < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Book[] books = {
                new Book(101, "Algorithms", "Thomas"),
                new Book(102, "Database", "Silberschatz"),
                new Book(103, "Java", "Herbert Schildt"),
                new Book(104, "Networking", "Forouzan"),
                new Book(105, "Operating Systems", "Galvin")
        };

        Arrays.sort(books, Comparator.comparing(Book::getTitle));

        String searchTitle = "Java";

        System.out.println("Linear Search:");
        Book result1 = linearSearch(books, searchTitle);

        if (result1 != null)
            System.out.println(result1);
        else
            System.out.println("Book not found");

        System.out.println();

        System.out.println("Binary Search:");
        Book result2 = binarySearch(books, searchTitle);

        if (result2 != null)
            System.out.println(result2);
        else
            System.out.println("Book not found");
    }
}
document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items: [
            { id: 1, name: 'Esspreso', img: 'produk 1.jpg', price: 18000 },
            { id: 2, name: 'Coffe Latte', img: 'produk 2.jpg', price: 17000 },
            { id: 3, name: 'Flat White Coffe', img: 'produk 3.jpg', price: 20000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,

        add(newItem) {
            // Cari apakah item sudah ada di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika item belum ada di cart
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // Jika item sudah ada di cart, tambahkan quantity dan update total
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },

        remove(id) {
            // Cari item yang ingin dihapus berdasarkan ID
            const cartItem = this.items.find((item) => item.id === id);

            if (cartItem) {
                // Jika item quantity lebih dari 1, kurangi quantity dan update total
                if (cartItem.quantity > 1) {
                    this.items = this.items.map((item) => {
                        if (item.id !== id) {
                            return item;
                        } else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    });
                } else {
                    // Jika quantity hanya 1, hapus item dari cart
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cartItem.price;
                }
            }
        }
    });
});

// Fungsi untuk mengonversi ke format mata uang rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(number);
};

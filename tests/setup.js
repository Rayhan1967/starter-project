/**
 * Jest Setup File
 * 
 * File ini dijalankan sebelum setiap test file untuk memastikan
 * environment test terisolasi dengan baik dan tidak mencemari
 * localStorage atau global state.
 */

// Mock localStorage untuk testing environment
// Ini memastikan test tidak mengubah localStorage yang sebenarnya
const localStorageMock = {
    store: {},
    getItem(key) {
        return this.store[key] || null;
    },
    setItem(key, value) {
        this.store[key] = String(value);
    },
    removeItem(key) {
        delete this.store[key];
    },
    clear() {
        this.store = {};
    },
    get length() {
        return Object.keys(this.store).length;
    },
    key(index) {
        const keys = Object.keys(this.store);
        return keys[index] || null;
    }
};

// Set mock localStorage ke global object
global.localStorage = localStorageMock;
global.sessionStorage = localStorageMock;

// Clear localStorage sebelum setiap test
beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
});

// Clear localStorage setelah setiap test
afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
});

// Suppress console logs during tests (optional)
// Uncomment jika ingin menyembunyikan console.log saat testing
// global.console = {
//     ...console,
//     log: jest.fn(),
//     debug: jest.fn(),
//     info: jest.fn(),
//     warn: jest.fn(),
// };

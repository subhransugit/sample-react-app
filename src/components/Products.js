// src/components/Products.js
import React, { useState, useEffect } from "react";

export default function Products() {
    const [product, setProduct] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("products")) || [];
        setList(stored);
    }, []);

    const addProduct = () => {
        if (product.trim() === "") return;
        const updatedList = [...list, product];
        setList(updatedList);
        localStorage.setItem("products", JSON.stringify(updatedList));
        setProduct("");
    };

    const deleteProduct = (name) => {
        const filtered = list.filter(p => p !== name);
        setList(filtered);
        localStorage.setItem("products", JSON.stringify(filtered));
    };

    return (
        <div>
            <h2>Products</h2>
            <input
                placeholder="Enter product name"
                value={product}
                onChange={e => setProduct(e.target.value)}
            />
            <button onClick={addProduct}>Add</button>
            <ul>
                {list.map((p, idx) => (
                    <li key={idx}>
                        {p} <button onClick={() => deleteProduct(p)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

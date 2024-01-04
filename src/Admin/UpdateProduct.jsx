import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Auth/Firebase';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', rate: 0, amount: 0, img: '', aval: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id, ...productDoc.data() });
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'products', id), { ...product });
      console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      {/* Add input fields for updating product details */}
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        value={product.rate}
        onChange={(e) => setProduct({ ...product, rate: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        value={product.amount}
        onChange={(e) => setProduct({ ...product, amount: parseFloat(e.target.value) })}
      />
      {/* ... (Add more input fields as needed) */}
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
};

export default UpdateProduct;

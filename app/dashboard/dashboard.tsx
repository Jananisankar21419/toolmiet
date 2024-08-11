"use client"
import { useState } from 'react';
import Auth from '../auth';

export default function Dashboard() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [img, setImg] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = { id, title, des, img, link };

    const res = await fetch('/api/add-project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      alert('Project added successfully!');
    } else {
      alert('Failed to add project');
    }
  };

  return (
    <Auth>
      <form onSubmit={handleSubmit}>
        <input
        type="number"
        value={id}
        onChange={(e)=> setId(e.target.value)}
        placeholder="Id"
        required/>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link"
          required
        />

        <button type="submit">Add Project</button>
      </form>
    </Auth>
  );
}

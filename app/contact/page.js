"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import ThemeToggle from "../../components/ThemeToggle";
import { Mail, Phone } from "lucide-react";

const Star = ({ filled, onClick }) => (
  <span
    onClick={onClick}
    className={`text-3xl cursor-pointer transition-colors duration-200 ${
      filled ? "text-purple-500" : "text-gray-300"
    }`}
  >
    ★
  </span>
);

export default function Contact() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [ratingData, setRatingData] = useState({ average: 0, totalVotes: 0 });
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then(setComments);

    fetch("/api/rating")
      .then((res) => res.json())
      .then(setRatingData);
  }, []);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text: newComment }),
    });
    const data = await res.json();
    setComments(data);
    setNewComment("");
  };

  const handleRate = async (value) => {
    setUserRating(value);
    const res = await fetch("/api/rating", {
      method: "POST",
      body: JSON.stringify({ value }),
    });
    const data = await res.json();
    setRatingData(data);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 px-4">
      <Navbar />
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Kontak & Komentar</h1>

        {/* Informasi Kontak */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-10 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Hubungi Saya</h2>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="text-purple-500" />
            <span className="text-sm">+62 896-0418-7757</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-purple-500" />
            <span className="text-sm">valeyka.d@email.com</span>
          </div>
        </div>

        {/* Komentar */}
        <div className="mb-8">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded mb-4 dark:bg-gray-800 dark:text-white"
            rows="4"
            placeholder="Tinggalkan komentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            onClick={handleCommentSubmit}
          >
            Kirim Komentar
          </button>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Komentar Pengunjung</h2>
          <ul className="space-y-3">
            {comments.map((comment, idx) => (
              <li key={idx} className="border-b pb-2 border-gray-200 dark:border-gray-700">
                {comment.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Rating */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Beri Rating Website Ini</h2>
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                filled={i <= (userRating || ratingData.average)}
                onClick={() => handleRate(i)}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Rating {ratingData.average.toFixed(1)} dari {ratingData.totalVotes} pengguna
          </p>
        </div>
      </div>
    </div>
  );
}

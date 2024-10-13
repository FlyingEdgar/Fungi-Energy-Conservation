import React, { useState } from 'react';
import { MessageSquare, Send, ThumbsUp, MessageCircle } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface Post {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  image?: string;
}

const UserPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "EcoWarrior",
      content: "Just installed solar panels on my roof! Excited to see the energy savings.",
      timestamp: "2024-03-15 10:30",
      likes: 5,
      comments: [
        { id: 1, author: "SolarFan", content: "That's awesome! How many kW system did you install?", timestamp: "2024-03-15 11:15" }
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      author: "WaterSaver",
      content: "Implemented a greywater system in my garden. My plants are thriving!",
      timestamp: "2024-03-14 15:45",
      likes: 3,
      comments: [],
      image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");
  const [activeCommentPost, setActiveCommentPost] = useState<number | null>(null);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: "Anonymous",
        content: newPost.trim(),
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSubmitComment = (postId: number) => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Math.max(0, ...posts.flatMap(p => p.comments.map(c => c.id))) + 1,
        author: "Anonymous",
        content: newComment.trim(),
        timestamp: new Date().toLocaleString()
      };
      setPosts(posts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      ));
      setNewComment("");
      setActiveCommentPost(null);
    }
  };

  return (
    <div>
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Community Posts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Community Posts</h2>
        </div>
      </div>
      <form onSubmit={handleSubmitPost} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your energy conservation story..."
            className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-colors flex items-center">
            <Send size={18} className="mr-2" /> Post
          </button>
        </div>
      </form>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            {post.image && (
              <img src={post.image} alt="Post" className="w-full h-48 object-cover rounded-lg mb-4" />
            )}
            <div className="flex items-center mb-2">
              <MessageSquare className="text-green-500 mr-2" size={18} />
              <span className="font-semibold">{post.author}</span>
              <span className="text-gray-500 text-sm ml-2">{post.timestamp}</span>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center space-x-4 mb-4">
              <button onClick={() => handleLike(post.id)} className="flex items-center text-gray-600 hover:text-blue-500">
                <ThumbsUp size={18} className="mr-1" /> {post.likes}
              </button>
              <button onClick={() => setActiveCommentPost(activeCommentPost === post.id ? null : post.id)} className="flex items-center text-gray-600 hover:text-green-500">
                <MessageCircle size={18} className="mr-1" /> {post.comments.length}
              </button>
            </div>
            {activeCommentPost === post.id && (
              <div className="mt-4">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded mb-2"
                />
                <button onClick={() => handleSubmitComment(post.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
                  Comment
                </button>
              </div>
            )}
            {post.comments.length > 0 && (
              <div className="mt-4 space-y-2">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center mb-1">
                      <span className="font-semibold text-sm">{comment.author}</span>
                      <span className="text-gray-500 text-xs ml-2">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
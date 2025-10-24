import React from 'react';
import LandingPageMNI from './components/landing/LandingPageMNI.jsx';
import NotFoundPage from './components/404/NotFoundPage.jsx';
import BlogPage from './components/blog/BlogPage.jsx';
import BlogPostSimple from './components/blog/BlogPostSimple.jsx';

export default function App() {
  // Simple routing based on current pathname
  const currentPath = window.location.pathname;
  
  console.log('Current path:', currentPath);
  
  // Blog routes
  if (currentPath === '/blog') {
    console.log('Rendering BlogPage');
    return <BlogPage />;
  }
  
  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    console.log('Rendering BlogPostSimple with slug:', slug);
    return <BlogPostSimple slug={slug} />;
  }
  
  // If path is not root, show 404 page
  if (currentPath !== '/') {
    console.log('Rendering NotFoundPage');
    return <NotFoundPage />;
  }
  
  console.log('Rendering LandingPageMNI');
  return <LandingPageMNI />;
}

import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <div>
        <img
          src="/404.png"
          alt="404 Page Not Found"
          style={{
            maxWidth: '720px',
            width: '100%',
            margin: '0 auto 10px',
            display: 'block',
          }}
        />

        <h1 style={{ marginBottom: '8px' }}>
          Sorry, we couldn't find that page.
        </h1>

        <p style={{ marginTop: '0', color: '#555' }}>
          It seems like the page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";


export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
background:
  "radial-gradient(circle at center, #000000 20%, #111827 30%, #1371ff 100%)",
color: "white",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="text-center">

        {/* Logo */}
<Image
  src="https://res.cloudinary.com/dpp8aspqs/image/upload/v1772290558/AI_Logo_dxqrdz.svg"
  alt="Creative Hub Logo"
  width={200}
  height={200}
  style={{ marginBottom: "20px" }}
/>
        {/* Title */}
        <h1 className="fw-bold display-4 mb-3">
          Creative Hub
        </h1>

        {/* Tagline */}
        <p className="lead mb-4">
          An ecosystem for careers — all in one place
        </p>

       <p className="mt-3" style={{ fontSize: "24px", opacity: 0.75 }}>
  Launching Soon
</p>

      </div>
    </div>
  );
}
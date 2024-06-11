const ModuleFinishTrack = () => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const currentMonth = "Jun 2024";

  return (
    <div
      style={{
        background: "#1d1d1d",
        color: "#fff",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <div className="flex items-center justify-between mb-4 gap-4">
        <h3 className="text-3xl font-bold text-white">Module Finish Track</h3>
        <div className="flex items-center gap-4">
          <span>{currentMonth}</span>
          <span style={{ cursor: "pointer" }}>ℹ️</span>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
        }}
      >
        {daysInMonth.map((day) => (
          <div
            key={day}
            style={{
              background: "#333",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleFinishTrack;

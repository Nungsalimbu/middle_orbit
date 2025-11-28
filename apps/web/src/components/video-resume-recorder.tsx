"use client";

import { useCallback, useRef, useState } from "react";

export function VideoResumeRecorder() {
  const [status, setStatus] = useState<"idle" | "recording" | "review">("idle");
  const [error, setError] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder>();
  const [chunks, setChunks] = useState<Blob[]>([]);

  const requestStream = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      return stream;
    } catch (err) {
      setError("Camera or microphone not available. Please enable permissions.");
      throw err;
    }
  }, []);

  const startRecording = useCallback(async () => {
    const stream = await requestStream();
    const recorder = new MediaRecorder(stream);
    mediaRecorder.current = recorder;
    setChunks([]);
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setChunks((prev) => [...prev, event.data]);
      }
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      setStatus("review");
    };
    recorder.start();
    setStatus("recording");
  }, [requestStream]);

  const stopRecording = useCallback(() => {
    mediaRecorder.current?.stop();
  }, []);

  return (
    <div className="rounded-3xl border border-midnight/10 bg-white p-6 shadow-glow">
      <p className="text-xs uppercase tracking-[0.4em] text-midnight/60">
        Video Resume Recorder
      </p>
      <h3 className="mt-2 font-display text-2xl text-midnight">Candidate Story Builder</h3>
      <p className="text-sm text-slate-600">
        Guided prompts coax authentic narratives. Auto-generate highlight clips for employers and
        feed AI career-fit explainability.
      </p>
      {error && <p className="mt-3 rounded-xl bg-ion/10 px-4 py-2 text-sm text-ion">{error}</p>}
      <div className="mt-4 flex flex-wrap gap-3">
        {status !== "recording" && (
          <button
            className="rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white"
            onClick={startRecording}
          >
            Start Recording
          </button>
        )}
        {status === "recording" && (
          <button
            className="rounded-full bg-ion px-4 py-2 text-sm font-semibold text-white"
            onClick={stopRecording}
          >
            Stop Recording
          </button>
        )}
        {status === "review" && chunks.length > 0 && (
          <a
            href={URL.createObjectURL(new Blob(chunks, { type: "video/webm" }))}
            download="middleorbit-video-resume.webm"
            className="rounded-full border border-midnight px-4 py-2 text-sm font-semibold text-midnight"
          >
            Download Draft
          </a>
        )}
      </div>
      <div className="mt-6 grid gap-4 text-sm text-slate-600">
        <div className="rounded-2xl bg-cloud/70 p-3">
          Prompt 1: “Show us a project where you solved a manpower challenge.”
        </div>
        <div className="rounded-2xl bg-cloud/70 p-3">
          Prompt 2: “How do you collaborate with remote supervisors?”
        </div>
      </div>
    </div>
  );
}


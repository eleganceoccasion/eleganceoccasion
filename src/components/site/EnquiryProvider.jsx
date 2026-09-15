import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

// Shared enquiry state. Only the non-sensitive service selection and event
// planning details (type, date, city, guests) persist to localStorage.
// Personal contact details (name, email, phone, notes) are never stored.

const STORAGE_KEY = "eo_enquiry_v1";
const EVENT_KEY = "eo_event_v1";

const EnquiryContext = createContext(null);

function readIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function readEvent() {
  try {
    const raw = localStorage.getItem(EVENT_KEY);
    return raw ? JSON.parse(raw) : { eventType: "", date: "", city: "", guests: "" };
  } catch {
    return { eventType: "", date: "", city: "", guests: "" };
  }
}

export function EnquiryProvider({ children }) {
  const [selectedIds, setSelectedIds] = useState(readIds);
  const [eventDetails, setEventDetails] = useState(readEvent);

  // Persist selections
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
    } catch { /* ignore */ }
  }, [selectedIds]);

  // Persist non-sensitive event details only
  useEffect(() => {
    try {
      const { eventType, date, city, guests } = eventDetails;
      localStorage.setItem(EVENT_KEY, JSON.stringify({ eventType, date, city, guests }));
    } catch { /* ignore */ }
  }, [eventDetails]);

  const toggleService = useCallback((id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const isSelected = useCallback((id) => selectedIds.includes(id), [selectedIds]);

  const removeService = useCallback((id) => {
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const clearServices = useCallback(() => setSelectedIds([]), []);

  const setEventDetail = useCallback((key, value) => {
    setEventDetails((prev) => ({ ...prev, [key]: value }));
  }, []);

  const setEvent = useCallback((next) => {
    setEventDetails((prev) => ({ ...prev, ...next }));
  }, []);

  const value = {
    selectedIds,
    selectedCount: selectedIds.length,
    toggleService,
    isSelected,
    removeService,
    clearServices,
    eventDetails,
    setEventDetail,
    setEvent,
  };

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}
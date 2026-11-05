import React from 'react';

export function ToothLogoIcon({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dynamic swirl ring - Blue crescent on top left */}
      <path
        d="M26 6C12.745 6 2 16.745 2 30C2 39.528 7.55 47.76 15.65 51.65C14.05 47.45 13.15 42.85 13.15 38C13.15 22.536 25.686 10 41.15 10C44.75 10 48.2 10.68 51.35 11.95C45.35 8.25 36.15 6 26 6Z"
        fill="#49baff"
      />
      {/* Dynamic swirl ring - Lime crescent on bottom right */}
      <path
        d="M38 58C51.255 58 62 47.255 62 34C62 24.472 56.45 16.24 48.35 12.35C49.95 16.55 50.85 21.15 50.85 26C50.85 41.464 38.314 54 22.85 54C19.25 54 15.8 53.32 12.65 52.05C18.65 55.75 27.85 58 38 58Z"
        fill="#adc91f"
      />
      {/* Central clean Tooth shape */}
      <path
        d="M32 17C26.5 17 22 20.8 22 25.8C22 29.5 23.8 33.2 25 37.5C26.2 41.8 26.5 47 28.5 47C30.2 47 30.5 42 32 37C33.5 42 33.8 47 35.5 47C37.5 47 37.8 41.8 39 37.5C40.2 33.2 42 29.5 42 25.8C42 20.8 37.5 17 32 17Z"
        fill="#FFFFFF"
        stroke="#49baff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Tooth subtle crown accent */}
      <path
        d="M28 24C30 25.2 34 25.2 36 24"
        stroke="#adc91f"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export function CheckCircleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <polyline
        points="8 12 11 15 16 9"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 0C5.398 0 .016 5.383.016 12.016c0 2.117.553 4.184 1.603 6.007L0 24l6.168-1.617a11.96 11.96 0 0 0 5.863 1.523h.005c6.632 0 12.016-5.383 12.016-12.016 0-3.21-1.25-6.226-3.52-8.496C18.261 1.224 15.245 0 12.031 0zm0 22.013h-.004a9.98 9.98 0 0 1-5.093-1.39l-.365-.217-3.782.992 1.01-3.687-.238-.38a9.97 9.97 0 0 1-1.53-5.316c0-5.527 4.496-10.023 10.027-10.023 2.678 0 5.195 1.043 7.086 2.938a9.96 9.96 0 0 1 2.934 7.085c0 5.53-4.496 10.024-10.027 10.024zm5.492-7.492c-.3-.15-1.777-.878-2.052-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-.893-.797-1.496-1.782-1.671-2.082-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.625-.925-2.225c-.244-.584-.492-.505-.676-.514-.175-.009-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502 0 1.476 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.123 4.53.715.31 1.274.495 1.709.633.719.228 1.373.196 1.89.119.577-.086 1.777-.726 2.027-1.427.25-.701.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35z" />
    </svg>
  );
}

export function StarIcon({ className = "w-5 h-5", filled = true }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill={filled ? "#facc15" : "none"} stroke="#facc15" strokeWidth={filled ? "0" : "1.5"}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06A6.33 6.33 0 0 0 3.1 15.6a6.34 6.34 0 0 0 10.82 4.48c.03-.03.06-.06.09-.09.05-.05.1-.1.14-.15.22-.24.4-.51.54-.8.15-.3.26-.62.33-.96.04-.21.07-.42.07-.64V8.41a8.27 8.27 0 0 0 4.5 1.3v-3.02z" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export function AlertCircleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Event = {
  title: string;
  date: string;
};

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Townhall Meeting",
      date: "2025-07-20",
    },
    {
      title: "Internship Onboarding",
      date: "2025-07-24",
    },
  ]);

  return (
    <>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">📅 Calendar Dashboard</h1>
        <p className="text-muted-foreground">
          Buat jadwal acara untuk PT Pupuk Kujang sekarang
        </p>
      </div>
      <div className="p-6 ">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">🗓️ Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="calendar-wrapper text-sm dark:bg-muted dark:text-foreground">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                height="auto"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,dayGridWeek",
                }}
                dateClick={(info) => {
                  const title = prompt("Add new event title:");
                  if (title) {
                    setEvents([...events, { title, date: info.dateStr }]);
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

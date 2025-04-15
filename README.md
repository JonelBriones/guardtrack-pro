# 🛡️ Security Operations Management System

A full-stack security management platform designed for guards and supervisors to handle incidents, visitor tracking, patrol logs, shift management, and more.

---

## 📋 Project Features Checklist

### ✅ Authentication & User Roles

- [ ] User registration and login.
- [ ] Password hashing (bcrypt).
- [ ] JWT-based authentication.
- [ ] Role-based access: `Guard` and `Supervisor`.

---

### 🚨 Incident Reporting

- [ ] Incident creation form (Type, Location, Description, Photo Upload).
- [ ] View incident history (list and filter by status, date, type).
- [ ] Supervisor status management: `Open → Under Review → Resolved`.
- [ ] Export incident reports (PDF or CSV).

---

### 🧑‍💼 Visitor Management

- [ ] Visitor entry form (Name, ID, Purpose, Time).
- [ ] Log visitor check-in/check-out.
- [ ] Filter visitors by date or name.
- [ ] Export visitor logs.

---

### 🕒 Shift Scheduling & Check-In

- [ ] Supervisor assigns shifts (calendar view).
- [ ] Guard shift check-in / check-out.
- [ ] Missed or late check-in alerts for supervisors.
- [ ] Shift history logs and filtering.

🧠 Core Features for the Scheduling Module
Officer Database

Name, Phone, Email, Badge Number.

Assigned Site or Flex.

Availability preferences.

Site-Based Scheduling

Assign guards to specific posts.

Flex pool for short notice replacements.

Drag & drop weekly or monthly calendar view.

Shift Notification via SMS

When a shift gap happens, send a text:
“Hi [Name], are you available for a shift today 3PM–11PM at [Site Name]? Position: Front Desk.”

Officer Schedule Links

Officers receive a secure, unique link to view their own schedule.

Option to export or download a PDF for the office.

Supervisor View

Real-time updates on shift confirmations.

See who has acknowledged the shift.

List of unfilled posts and open gaps.

---

### 🧭 Patrol Route Logging

- [ ] Log checkpoints manually or via QR scan.
- [ ] Track patrol timestamp and location.
- [ ] Supervisor view for completed and missed patrols.
- [ ] Export patrol route history.
- [ ] Interactive map, click on paths.

---

### 🎒 Lost & Found Log

- [ ] Guards submit lost or found item reports.
- [ ] Match found items with lost reports.
- [ ] Item status management: `Unclaimed → Claimed`.
- [ ] Supervisor overview panel.

---

### 🔐 Access Control Logs

- [ ] Log simulated badge scans (Access Granted/Denied).
- [ ] Sort and filter access logs by time, user, and location

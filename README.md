# ✈️ AeroFlow

**AeroFlow** is an internal process automation platform designed for aviation and airport-related training institutes.  
It streamlines **lead management, telecalling, admissions, training operations, and student lifecycle** using a scalable **microservices architecture**.

---

## 🚀 Key Objectives

- Automate institute internal workflows
- Centralize admissions, telecalling, and training operations
- Support role-based access across departments
- Scalable SaaS-ready backend using microservices

---

## 🏗️ System Architecture

- **Frontend**: Role-based web application
- **Backend**: Microservices architecture
- **Communication**: gRPC
- **Queue & Jobs**: Redis + Bull
- **Framework**: NestJS

---

## 🎨 Frontend Modules & Roles

### 1. Master Admin
**Roles**
- Master Admin
- Reception

**Responsibilities**
- Institute-level configuration
- User & role management
- Admission overview
- Reception desk operations

---

### 2. Telecalling
**Roles**
- Tele Admin
- Telecaller

**Responsibilities**
- Lead management
- Call assignment & tracking
- Follow-ups and conversion status
- Telecaller performance monitoring

---

### 3. Training
**Roles**
- Admin (HOD)
- Staff / Trainer

**Responsibilities**
- Course & batch management
- Class allocation
- Trainer assignment
- Attendance & progress tracking

---

### 4. Student
**Roles**
- Student

**Responsibilities**
- Profile management
- Course & batch details
- Training schedule
- Notifications & updates

---

## ⚙️ Backend Architecture

Backend runs on **NestJS microservices**, designed for scalability and independent deployment.

### 🧩 API Gateway
- Single entry point for frontend
- Authentication & request routing
- Rate limiting & validation

---

### 🧩 Microservices

backend/
├── api-gateway
└── services/
├──── authentication
├──── institute
├──── telecalling
├──── training
└──── reception


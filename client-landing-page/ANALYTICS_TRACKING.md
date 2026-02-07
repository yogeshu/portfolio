# Google Analytics Event Tracking Documentation

This document outlines all Google Analytics events implemented in the client landing page for conversion tracking and user behavior analysis.

## Overview

The landing page tracks comprehensive user interactions to help optimize conversion rates and understand user behavior patterns. All tracking is implemented using Google Analytics 4 (GA4) with the measurement ID: `G-16CGV8G7LW`.

## Analytics Utility Location

All tracking functions are centralized in: `/src/utils/analytics.js`

## Event Categories

### 1. **Conversion Events** 🎯 (High Priority)

These events track high-value actions that indicate conversion intent:

| Event Name | Trigger | Parameters | Value |
|------------|---------|------------|-------|
| `generate_lead` | Form submission | service_type, budget | - |
| `submit_form` | Contact form submitted | service_type | - |
| `budget_selected` | Budget tier selected in form | budget_tier | - |
| `book_call` | Call booking CTA clicked | location (Navbar/Mobile Menu/Contact) | 100 |
| `schedule_meeting` | Meeting scheduled | location | - |
| `select_service` | Service card CTA clicked | service_name | - |
| `add_to_cart` | Service selected (ecommerce) | service_name | - |
| `contact_click` | Email/Phone clicked | type, location | - |

**Where to view in GA4:**
- Go to Reports → Engagement → Conversions
- Mark these events as conversions in GA4 Admin

---

### 2. **Form Interaction Events** 📝

Track user engagement with the contact form:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `form_start` | User focuses on first form field | - |
| `field_focus` | Individual field focused | field_name |
| `form_abandon` | User left page after starting form | completed_fields |
| `validation_error` | Form validation fails | field_name, error_type |

**Business Value:**
- Identify which form fields cause abandonment
- Optimize form UX to reduce friction
- A/B test form layouts

---

### 3. **Engagement Events** 📊

Measure content engagement quality:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `scroll_depth` | User scrolls to milestones | percentage (25%, 50%, 75%, 100%) |
| `time_on_page` | Time milestones reached | seconds (30s, 1min, 2min, 3min, 5min+) |
| `view_section` | Section comes into viewport | section_name |
| `page_view` | Initial page load | page_title, page_path |
| `page_exit` | User leaves page | total_time |

**Business Value:**
- Understand content quality (high scroll depth = engaged users)
- Identify where users lose interest
- Optimize content placement

---

### 4. **Navigation Events** 🧭

Track how users move through the site:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `click` | Internal navigation link clicked | link_name, destination |
| `external_link` | External link clicked | url, context |
| `click` (social) | Social media link clicked | platform |

**Example Implementations:**
```javascript
// Navbar links
trackNavigation.click('Work', 'work')

// External links
trackNavigation.externalLink('https://example.com', 'Case Study')

// Social media
trackNavigation.social('LinkedIn')
```

---

### 5. **Content Engagement Events** 📚

Track specific content interactions:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `faq_open` | FAQ accordion opened | question |
| `view_case_study` | Case study viewed | project_name |
| `view_work` | Portfolio item viewed | work_name |
| `view_testimonial` | Testimonial viewed | client_name |

**Where to view in GA4:**
- Reports → Engagement → Events
- Filter by event name

---

### 6. **Enhanced Conversion Events** 💎

Advanced intent signals:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `view_item_list` | Pricing section viewed | services_pricing |
| `pricing_engagement` | User spent time on pricing | time_spent (seconds) |
| `high_intent` | Multiple CTA clicks | - |
| `contact_form_impression` | Contact form scrolled into view | - |

**Business Value:**
- Identify hot leads (high pricing engagement)
- Retarget users who viewed pricing but didn't convert
- Optimize remarketing campaigns

---

### 7. **Error Tracking** ⚠️

Track issues that may impact conversions:

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `exception` | Form submission error | error_message |
| `exception` | General error | error_type, error_message |

---

## Automatic Tracking Features

### Scroll Depth Tracking 📏
Automatically tracks when users scroll to:
- 25% of page
- 50% of page
- 75% of page
- 100% of page

### Time on Page Tracking ⏱️
Automatically tracks milestones at:
- 30 seconds
- 1 minute
- 2 minutes
- 3 minutes
- 5+ minutes

### Form Abandonment Detection 🚪
Tracks when users:
1. Start filling the form
2. Fill multiple fields
3. Leave without submitting

---

## Key Conversion Funnels to Track

### Primary Conversion Funnel
1. `page_view` → Landing
2. `scroll_depth` (50%+) → Engaged
3. `view_section` (Services) → Interest
4. `pricing_engagement` (10s+) → High Intent
5. `contact_form_impression` → Considering
6. `form_start` → Started
7. `generate_lead` → **CONVERTED**

### Call Booking Funnel
1. `page_view` → Landing
2. `click` (CTA) → Interest
3. `book_call` → **CONVERTED**

---

## How to View Data in Google Analytics 4

### 1. Real-Time Events
- Go to: **Reports → Realtime**
- See events as they happen

### 2. Event Summary
- Go to: **Reports → Engagement → Events**
- View all event counts and parameters

### 3. Create Custom Reports

#### Conversion Rate by Service Type
```
Dimension: event_label (from submit_form)
Metric: Event count
Secondary Dimension: budget_selected
```

#### Form Abandonment Analysis
```
Dimension: event_name
Filter: form_start, form_abandon
Metric: Event count
```

#### High-Intent Users
```
Segment: Users who triggered:
- pricing_engagement (>10s)
- contact_form_impression
- form_start
BUT NOT generate_lead
```

---

## Recommended GA4 Conversions to Mark

Go to **Admin → Data Display → Conversions** and mark these as conversions:

1. ✅ `generate_lead` (form submission)
2. ✅ `book_call` (call booking)
3. ✅ `select_service` (service interest)
4. ✅ `contact_form_impression` (view contact form)

---

## Testing the Implementation

### 1. Check Browser Console (Development Mode)
Events are logged to console in dev mode:
```
📊 Analytics Event: {action: 'click', category: 'Navigation', label: 'Work', value: null}
```

### 2. Use Google Analytics DebugView
- Install Google Analytics Debugger extension
- Go to **Admin → DebugView**
- See events in real-time with full parameters

### 3. Test Each Event Type
- [ ] Click all CTAs (navbar, hero, services)
- [ ] Fill out contact form partially (test abandonment)
- [ ] Submit form completely
- [ ] Open FAQs
- [ ] Click external links
- [ ] Click social media links
- [ ] Scroll through entire page

---

## Privacy & GDPR Compliance

The implementation:
- ✅ Does NOT track personally identifiable information (PII)
- ✅ Uses Google Analytics' built-in anonymization
- ✅ Tracks behavioral data only
- ⚠️ Consider adding a cookie consent banner if targeting EU users

---

## Maintenance & Optimization

### Weekly Review
- Check top converting sources
- Review form abandonment rate
- Analyze scroll depth patterns

### Monthly Review
- Compare conversion rates month-over-month
- Identify high-intent users who didn't convert
- A/B test elements with low engagement

### Quarterly Review
- Audit all tracked events
- Remove unused events
- Add new events for new features

---

## Support & Questions

For analytics setup questions or issues:
1. Check browser console for tracking errors
2. Verify GA4 measurement ID: `G-16CGV8G7LW`
3. Ensure gtag script loads before page interactions

---

## Summary Statistics

**Total Event Types:** 30+
**Conversion Events:** 8
**Engagement Tracking:** Scroll depth, time on page, form interactions
**Funnel Tracking:** Complete conversion funnels for form and call booking

---

*Last Updated: February 2026*
*Version: 1.0*

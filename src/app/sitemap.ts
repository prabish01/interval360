import { MetadataRoute } from "next";

const BASE_URL = "https://interval360.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                                                      priority: 1.0,  changeFrequency: "weekly" },
    { url: `${BASE_URL}/platform-overview`,                                     priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/how-it-works`,                                          priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/conversational-ai`,                                     priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/reports-and-outputs`,                                   priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/solutions`,                                             priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/solutions/leadership-development`,                      priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/solutions/talent-decisions`,                            priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/for-coaches`,                                           priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/pricing`,                                               priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/buy`,                                                   priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources`,                                             priority: 0.7,  changeFrequency: "weekly"  },
    { url: `${BASE_URL}/resources/how-to-run-a-360-in-14-days`,                priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources/case-study-survey-fatigue`,                  priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources/case-study-global-cohort`,                   priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources/how-to-choose-the-right-raters`,             priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources/using-what-and-how-in-promotion-decisions`,  priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/company`,                                               priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/privacy`,                                               priority: 0.3,  changeFrequency: "yearly"  },
    { url: `${BASE_URL}/terms`,                                                 priority: 0.3,  changeFrequency: "yearly"  },
  ];

  return routes.map((route) => ({ ...route, lastModified: now }));
}

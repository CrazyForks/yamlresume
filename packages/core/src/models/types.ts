/**
 * MIT License
 *
 * Copyright (c) 2023–Present PPResume (https://ppresume.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import type {
  COUNTRY_OPTIONS,
  DEGREE_OPTIONS,
  FLUENCY_OPTIONS,
  FONTSPEC_NUMBERS_OPTIONS,
  FONT_SIZE_OPTIONS,
  LANGUAGE_OPTIONS,
  LEVEL_OPTIONS,
  LOCALE_LANGUAGE_OPTIONS,
  NETWORK_OPTIONS,
  SECTION_IDS,
  TEMPLATE_OPTIONS,
} from '@/models'

/**
 * A union type for all possible countries and regions in the world.
 */
export type Country = (typeof COUNTRY_OPTIONS)[number]

/**
 * A union type for all possible degrees.
 */
export type Degree = (typeof DEGREE_OPTIONS)[number]

/**
 * A union type for all possible language fluency levels.
 */
export type Fluency = (typeof FLUENCY_OPTIONS)[number]

/**
 * Keywords type, just an alias for a string array.
 */
type Keywords = string[]

/**
 * A union type for all supported languages.
 */
export type Language = (typeof LANGUAGE_OPTIONS)[number]

/**
 * A union type for all possible skill proficiency levels.
 */
export type Level = (typeof LEVEL_OPTIONS)[number]

/**
 * A union type for all possible section IDs.
 */
export type SectionID = (typeof SECTION_IDS)[number]

/**
 * A union type for all possible template options.
 */
export type TemplateOption = (typeof TEMPLATE_OPTIONS)[number]

/**
 * A union type for all possible locale languages.
 */
export type LocaleLanguageOption = (typeof LOCALE_LANGUAGE_OPTIONS)[number]

/**
 * A union type for all possible social network options.
 */
export type Network = (typeof NETWORK_OPTIONS)[number]

/**
 * A single award item.
 *
 * @see {@link awardItemSchema} for its schema constraints.
 */
type AwardItem = {
  /** The organization or entity that gave the award. */
  awarder: string
  /** The name or title of the award. */
  title: string

  /** The date the award was received (e.g., "2020", "Oct 2020"). */
  date?: string
  /** A short description or details about the award (supports rich text). */
  summary?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed date string. */
    date: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'awards' section of the resume content.
 *
 * @see {@link awardsSchema} for its schema constraints.
 */
export type Awards = {
  /** An array of award items. */
  awards?: AwardItem[]
}

/**
 * The basic personal information.
 *
 * @see {@link basicsSchema} for its schema constraints.
 */
type BasicsItem = {
  /** Full name. */
  name: string

  /** Email address. */
  email?: string
  /** A brief professional headline or title (e.g., "Software Engineer"). */
  headline?: string
  /** Phone number. */
  phone?: string
  /** A professional summary or objective statement (supports rich text). */
  summary?: string
  /** Personal website or portfolio URL. */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
    /** Transformed URL string (e.g., LaTeX href command). */
    url: string
  }
}

/**
 * The 'basics' section of the resume content.
 */
export type Basics = {
  /** The basic personal information item. */
  basics: BasicsItem
}

/**
 * A single certification item.
 *
 * @see {@link certificateItemSchema} for its schema constraints.
 */
type CertificateItem = {
  /** The organization that issued the certificate. */
  issuer: string
  /** The name of the certificate. */
  name: string

  /** The date the certificate was obtained (e.g., "2021", "Nov 2021"). */
  date?: string
  /** URL related to the certificate (e.g., verification link). */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed date string. */
    date: string
  }
}

/**
 * The 'certificates' section of the resume content.
 *
 * @see {@link certificatesSchema} for its schema constraints.
 */
export type Certificates = {
  /** An array of certificate items. */
  certificates?: CertificateItem[]
}

/**
 * A single education history item.
 *
 * @see {@link educationItemSchema} for its schema constraints.
 */
type EducationItem = {
  /** Field of study (e.g., "Computer Science"). */
  area: string
  /** Name of the institution. */
  institution: string
  /** Start date of study (e.g., "2016", "Sep 2016"). */
  startDate: string
  /** The type of degree obtained. */
  degree: Degree

  /** List of courses taken (can be string array or pre-joined string). */
  courses?: string[]
  /** End date of study (e.g., "2020", "May 2020"). Empty implies "Present". */
  endDate?: string
  /** Description of accomplishments or details (supports rich text). */
  summary?: string
  /** GPA or academic score. */
  score?: string
  /** URL related to the institution or degree. */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed courses string (e.g., comma-separated). */
    courses: string
    /** Combined string of degree, area, and score. */
    degreeAreaAndScore: string
    /** Combined string representing the date range. */
    dateRange: string
    /** Transformed start date string. */
    startDate: string
    /** Transformed end date string (or "Present"). */
    endDate: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'education' section of the resume content.
 *
 * @see {@link educationSchema} for its schema constraints.
 */
export type Education = {
  /** An array of education history items. */
  education: EducationItem[]
}

/**
 * A single interest item.
 *
 * @see {@link interestItemSchema} for its schema constraints.
 */
type InterestItem = {
  /** Name of the interest category (e.g., "Reading", "Photography"). */
  name: string

  /** Keywords related to the interest. */
  keywords?: Keywords

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed keywords string (e.g., comma-separated). */
    keywords: string
  }
}

/**
 * The 'interests' section of the resume content.
 *
 * @see {@link interestsSchema} for its schema constraints.
 */
export type Interests = {
  /** An array of interest items. */
  interests?: InterestItem[]
}

/**
 * A single language proficiency item.
 *
 * @see {@link languageItemSchema} for its schema constraints.
 */
export type LanguageItem = {
  /** The level of proficiency of the language. */
  fluency: Fluency
  /** The language. */
  language: Language

  /** Specific keywords related to language skills (e.g., "Translation"). */
  keywords?: Keywords

  /** Computed values derived during transformation. */
  computed?: {
    /** Translated fluency level string. */
    fluency: string
    /** Translated language name string. */
    language: string
    /** Transformed keywords string. */
    keywords: string
  }
}

/**
 * The 'languages' section of the resume content.
 *
 * @see {@link languagesSchema} for its schema constraints.
 */
export type Languages = {
  /** An array of language items. */
  languages?: LanguageItem[]
}

/**
 * The location information.
 *
 * @see {@link locationItemSchema} for its schema constraints.
 */
type LocationItem = {
  /** City name. */
  city: string

  /** Street address. */
  address?: string
  /** Country code or name. */
  country?: Country
  /** Postal or ZIP code. */
  postalCode?: string
  /** State, province, or region. */
  region?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Combined string of postal code and address. */
    postalCodeAndAddress: string
    /** Combined string of region and country. */
    regionAndCountry: string
    /** Fully formatted address string based on locale. */
    fullAddress: string
  }
}

/**
 * The 'location' section of the resume content.
 *
 * @see {@link locationSchema} for its schema constraints.
 */
export type Location = {
  /** The location information item. */
  location?: LocationItem
}

/**
 * A single online profile item (e.g., GitHub, LinkedIn).
 *
 * @see {@link profileItemSchema} for its schema constraints.
 */
export type ProfileItem = {
  /** The name of the network or platform. */
  network: Network
  /** The username on the platform. */
  username: string

  /** The URL of the profile. */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed URL string (e.g., LaTeX href with icon). */
    url: string
  }
}

/**
 * The 'profiles' section of the resume content.
 *
 * @see {@link profilesSchema} for its schema constraints.
 */
export type Profiles = {
  /** An array of online profile items. */
  profiles?: ProfileItem[]
}

/**
 * A single project item.
 *
 * @see {@link projectItemSchema} for its schema constraints.
 */
type ProjectItem = {
  /** Name of the project. */
  name: string
  /** Start date of the project (e.g., "2021", "Jan 2021"). */
  startDate: string
  /** Detailed accomplishments for the project (supports rich text). */
  summary: string

  /** Description of the project. */
  description?: string
  /** End date of the project (e.g., "2022", "Jul 2022"). */
  endDate?: string
  /** Keywords or technologies used in the project. */
  keywords?: Keywords
  /** URL related to the project (e.g., repository, live demo). */
  url?: string
  /** Computed values derived during transformation. */

  computed?: {
    /** Transformed keywords string. */
    keywords: string
    /** Combined string representing the date range. */
    dateRange: string
    /** Transformed start date string. */
    startDate: string
    /** Transformed end date string (or "Present"). */
    endDate: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'projects' section of the resume content.
 *
 * @see {@link projectsSchema} for its schema constraints.
 */
export type Projects = {
  /** An array of project items. */
  projects?: ProjectItem[]
}

/**
 * A single publication item.
 *
 * @see {@link publicationItemSchema} for its schema constraints.
 */
type PublicationItem = {
  /** Name or title of the publication. */
  name: string
  /** Publisher of the work. */
  publisher: string

  /** Date of publication (e.g., "2023", "Mar 2023"). */
  releaseDate?: string
  /** Summary or abstract of the publication (supports rich text). */
  summary?: string
  /** URL related to the publication (e.g., DOI, link). */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed release date string. */
    releaseDate: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'publications' section of the resume content.
 *
 * @see {@link publicationsSchema} for its schema constraints.
 */
export type Publications = {
  /** An array of publication items. */
  publications?: PublicationItem[]
}

/**
 * A single reference item.
 *
 * @see {@link referenceItemSchema} for its schema constraints.
 */
type ReferenceItem = {
  /** Name of the reference. */
  name: string
  /** A brief note about the reference (supports rich text). */
  summary: string

  /** Email address of the reference. */
  email?: string
  /** Phone number of the reference. */
  phone?: string
  /** Relationship to the reference (e.g., "Former Manager"). */
  relationship?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'references' section of the resume content.
 *
 * @see {@link referencesSchema} for its schema constraints.
 */
export type References = {
  /** An array of reference items. */
  references?: ReferenceItem[]
}

/**
 * A single skill item.
 *
 * @see {@link skillItemSchema} for its schema constraints.
 */
type SkillItem = {
  /** Proficiency level in the skill. */
  level: Level
  /** Name of the skill. */
  name: string
  /** Specific keywords or technologies related to the skill. */

  keywords?: Keywords

  /** Computed values derived during transformation. */
  computed?: {
    /** Translated level string. */
    level: string
    /** Transformed keywords string. */
    keywords: string
  }
}

/**
 * The 'skills' section of the resume content.
 *
 * @see {@link skillsSchema} for its schema constraints.
 */
export type Skills = {
  /** An array of skill items. */
  skills?: SkillItem[]
}

/**
 * A single volunteer experience item.
 *
 * @see {@link volunteerItemSchema} for its schema constraints.
 */
type VolunteerItem = {
  /** Name of the organization. */
  organization: string
  /** Role or position held. */
  position: string
  /** Start date of the volunteer work (e.g., "2019", "Jun 2019"). */
  startDate: string
  /** Summary of responsibilities or achievements (supports rich text). */
  summary: string

  /** End date of the volunteer work (e.g., "2020", "Dec 2020"). */
  endDate?: string
  /** URL related to the organization or work. */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Combined string representing the date range. */
    dateRange: string
    /** Transformed start date string. */
    startDate: string
    /** Transformed end date string (or "Present"). */
    endDate: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'volunteer' section of the resume content.
 *
 * @see {@link volunteerSchema} for its schema constraints.
 */
export type Volunteer = {
  /** An array of volunteer experience items. */
  volunteer?: VolunteerItem[]
}

/**
 * A single work experience item.
 *
 * @see {@link workItemSchema} for its schema constraints.
 */
type WorkItem = {
  /** Name of the company or employer. */
  name: string
  /** Job title or position held. */
  position: string
  /** Start date of employment (e.g., "2021", "Apr 2021"). */
  startDate: string
  /** Summary of responsibilities and accomplishments (supports rich text). */
  summary: string

  /** End date of employment (e.g., "2023", "Aug 2023"). */
  endDate?: string
  /** Keywords related to the role or technologies used. */
  keywords?: Keywords
  /** URL related to the company or work. */
  url?: string

  /** Computed values derived during transformation. */
  computed?: {
    /** Transformed keywords string. */
    keywords: string
    /** Combined string representing the date range. */
    dateRange: string
    /** Transformed start date string. */
    startDate: string
    /** Transformed end date string (or "Present"). */
    endDate: string
    /** Transformed summary string (e.g., LaTeX code). */
    summary: string
  }
}

/**
 * The 'work' section of the resume content.
 *
 * @see {@link workSchema} for its schema constraints.
 */
export type Work = {
  /** An array of work experience items. */
  work?: WorkItem[]
}

/**
 * The structure for any top-level resume section.
 */
export type SectionDefaultValues =
  | Awards
  | Basics
  | Certificates
  | Education
  | Interests
  | Languages
  | Location
  | Profiles
  | Projects
  | Publications
  | References
  | Skills
  | Volunteer
  | Work

/**
 * The structure for a single default item within each resume section.
 */
export type ResumeItem = {
  award: AwardItem
  basics: BasicsItem
  certificate: CertificateItem
  education: EducationItem
  interest: InterestItem
  language: LanguageItem
  location: LocationItem
  project: ProjectItem
  profile: ProfileItem
  publication: PublicationItem
  reference: ReferenceItem
  skill: SkillItem
  volunteer: VolunteerItem
  work: WorkItem
}

/**
 * The structure for the entire resume content.
 *
 * @remarks - only `basics` and `education` sections are strictly required.
 */
export type ResumeContent = {
  /** Array of award items. */
  awards?: AwardItem[]
  /** Basic personal information. */
  basics: BasicsItem
  /** List of certificate items. */
  certificates?: CertificateItem[]
  /** List of education history items. */
  education: EducationItem[]
  /** List of interest items. */
  interests?: InterestItem[]
  /** List of language proficiency items. */
  languages?: LanguageItem[]
  /** Location information. */
  location?: LocationItem
  /** List of project items. */
  projects?: ProjectItem[]
  /** List of online profile items. */
  profiles?: ProfileItem[]
  /** List of publication items. */
  publications?: PublicationItem[]
  /** List of reference items. */
  references?: ReferenceItem[]
  /** List of skill items. */
  skills?: SkillItem[]
  /** List of volunteer experience items. */
  volunteer?: VolunteerItem[]
  /** List of work experience items. */
  work?: WorkItem[]
  /* Computed values derived during transformation, applicable to the entire
   * content. */
  computed?: {
    /** Translated names for each resume section based on locale. */
    sectionNames?: {
      awards?: string
      basics?: string
      certificates?: string
      education?: string
      interests?: string
      languages?: string
      location?: string
      projects?: string
      profiles?: string
      publications?: string
      references?: string
      skills?: string
      volunteer?: string
      work?: string
    }
    /** Combined and formatted string of URLs from basics and profiles. */
    urls?: string
  }
}

/**
 * The structure for page margin settings.
 */
type ResumeLayoutMargins = {
  /** Top margin value (e.g., "2.5cm"). */
  top?: string
  /** Bottom margin value (e.g., "2.5cm"). */
  bottom?: string
  /** Left margin value (e.g., "1.5cm"). */
  left?: string
  /** Right margin value (e.g., "1.5cm"). */
  right?: string
}

/**
 * The fontspec numbers style.
 *
 * - `Lining` - standard lining figures (default for CJK languages)
 * - `OldStyle` - old style figures with varying heights (default for Latin
 *   languages)
 * - `Auto` - an undefined state, allowing the style to be automatically
 *   determined based on the selected `LocaleLanguage`
 */
export type FontspecNumbers = (typeof FONTSPEC_NUMBERS_OPTIONS)[number]

/**
 * The font size.
 */
export type FontSize = (typeof FONT_SIZE_OPTIONS)[number]

/**
 * The typography settings like font size.
 */
type ResumeLayoutTypography = {
  /** Base font size for the document (e.g., "10pt", "11pt"). */
  fontSize?: string
}

/**
 * The LaTeX specific settings.
 */
type ResumeLayoutLaTeX = {
  /** LaTeX fontspec package configurations. */
  fontspec?: {
    /** Style for rendering numbers (Lining or OldStyle). */
    numbers?: FontspecNumbers
  }
}

/**
 * The locale settings, primarily the language for translations.
 */
type ResumeLayoutLocale = {
  /** The selected language for the resume content and template terms. */
  language?: LocaleLanguageOption
}

/**
 * The page-level settings like page numbering.
 */
type ResumeLayoutPage = {
  /** Whether to display page numbers. */
  showPageNumbers?: boolean
}

/**
 * The selected template identifier.
 */
type ResumeTemplate = TemplateOption

/**
 * The overall layout configuration, including template, margins,
 * typography, locale, and computed environment settings.
 * */
export type ResumeLayout = {
  /** The selected template configuration. */
  template?: ResumeTemplate
  /** LaTeX specific settings. */
  latex?: ResumeLayoutLaTeX
  /** Page margin settings. */
  margins?: ResumeLayoutMargins
  /** Typography settings. */
  typography?: ResumeLayoutTypography
  /** Localization settings. */
  locale?: ResumeLayoutLocale
  /** Page-level settings. */
  page?: ResumeLayoutPage
}

/**
 * The complete resume data structure, including content and layout.
 */
export type Resume = {
  /** Contains all the textual and structured content of the resume sections. */
  content: ResumeContent
  /** Defines the visual appearance, template, and localization settings. */
  layout?: ResumeLayout
}

export type PrivacyPolicyData = {
  privacyPolicy: {
    lastUpdated: string;
    introduction: string;
    sections: Section[];
  };
};

export type Section = {
  title: string;
  description?: string;
  subsections?: Subsection[];
  uses?: string[];
  cases?: Case[];
  rights?: string[];
  contactInformation?: string;
  contactDetails?: ContactDetails;
};

export type Subsection = {
  subtitle: string;
  description: string;
};

export type Case = {
  caseType: string;
  details: string;
};

export type ContactDetails = {
  name: string;
  email: string;
  address?: string;
};

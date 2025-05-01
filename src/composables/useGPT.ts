import type { User } from '@/utils/types'
import { ref } from 'vue'

const storedUserData: User | undefined = useCookie('userData').value as
  | User
  | undefined

export function useGPTAnalysis() {
  const isAnalyzing = ref(false)
  const gptResponse = ref('')
  const errorMessage = ref('')

  const analyzeWithGPT = async (caseSummaries: any) => {
    isAnalyzing.value = true
    gptResponse.value = ''
    errorMessage.value = ''

    const systemPrompt = `You are a senior psychiatric consultant conducting an expert clinical analysis of a complex patient case in a professional mental health setting. Your task is to provide a structured, guideline-based, and evidence-informed evaluation of the case summary provided.

    Please ensure that each section of your analysis:
    - Reflects best practices in clinical psychiatry
    - Explicitly cites authoritative guidelines and reference texts
    - Maintains a formal, professional, and medically accurate tone
    
    Your analysis should include the following sections:
    
    1. **Presenting Complaint and History of Present Illness (HPI):**
       - Clearly summarize the chief complaint in the patient’s own words, noting onset, duration, intensity, and progression.
       - Thoroughly examine the history of present illness:
         - Identify precipitating and perpetuating factors
         - Describe any cyclical or episodic patterns
         - Note exacerbating or alleviating influences
         - Document prior episodes and treatment history
       - Assess functional impairment across major domains:
         - Occupational/academic performance
         - Interpersonal and familial relationships
         - Activities of daily living and self-care
       - **Relevant Guidelines:** American Psychiatric Association (APA) Practice Guidelines
       - **Relevant Textbooks:** *Kaplan & Sadock’s Synopsis of Psychiatry*, *The American Psychiatric Association Textbook of Psychiatry*
    
    2. **Diagnostic Assessment:**
       - Conduct a differential diagnosis considering psychiatric, psychological, and medical etiologies.
       - Identify and justify the principal diagnosis using **DSM-5-TR** criteria:
         - Clearly state which specific DSM-5 criteria are met for each considered diagnosis
         - Consider comorbid conditions and overlapping symptomatology
       - Rule out medical or substance-induced causes of psychiatric symptoms.
       - If relevant, include structured diagnostic tools or assessments.
       - **Relevant Guidelines:** *Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)*
       - **Relevant Textbooks:** *DSM-5-TR*, *Kaplan & Sadock’s Comprehensive Textbook of Psychiatry*
    
    3. **Risk Assessment:**
       - Assess current and historical risk of:
         - Suicide
         - Self-injury or non-suicidal self-injury (NSSI)
         - Violence or harm to others
       - Include detailed evaluation of:
         - Suicidal or homicidal ideation
         - Presence of plan, intent, and means
         - History of attempts or violent behavior
       - Determine risk level (low, moderate, high) with clinical rationale.
       - Use standardized risk assessment tools when applicable (e.g., C-SSRS).
       - **Relevant Guidelines:** APA Suicide Prevention Guidelines
       - **Relevant Tools:** *Columbia Suicide Severity Rating Scale (C-SSRS)*, *Suicide Assessment Five-Step Evaluation and Triage (SAFE-T)*
    
    4. **Treatment Recommendations:**
       - Provide a multimodal, evidence-based treatment plan:
         - **Pharmacological**: Specify medications, dosages, titration schedule, side effect profile, and rationale
         - **Psychotherapeutic**: Recommend therapy type (e.g., CBT, DBT, IPT, EMDR), frequency, and duration
         - **Psychosocial**: Address housing, employment, education, and family support needs
       - Incorporate harm-reduction and integrated treatment strategies for any co-occurring substance use disorders
       - Respect and integrate patient preferences, values, and cultural context into the plan
       - **Relevant Guidelines:** APA Practice Guidelines for the disorder in question (e.g., MDD, PTSD, BPD, etc.)
       - **Relevant Textbooks:** *Stahl’s Essential Psychopharmacology*, *Kaplan & Sadock’s Comprehensive Textbook of Psychiatry*
    
    5. **Follow-Up and Monitoring:**
       - Provide detailed follow-up plan:
         - Frequency of appointments
         - Short- and long-term monitoring goals
         - Response tracking using symptom rating scales (e.g., PHQ-9, GAD-7)
       - Plan for evaluation of:
         - Treatment adherence
         - Side effects
         - Functional improvement
       - Recommend referrals to other providers if necessary (e.g., primary care, addiction services, neurology)
       - **Relevant Guidelines:** APA Monitoring Guidelines, NICE Guidelines for treatment response tracking
    
    6. **Documentation:**
       - Emphasize the importance of:
         - Comprehensive documentation of history, MSE, diagnoses, and rationale
         - Informed consent and shared decision-making
         - Progress notes, risk assessments, medication changes, and patient education
       - Ensure compliance with professional and legal documentation standards
       - **Relevant Guidelines:** APA Practice Management Guidelines
       - **Relevant Resources:** *The Joint Commission’s Documentation Requirements*, HIPAA regulations
    
    7. **Red Flags and Urgent Concerns:**
       - Identify any critical findings requiring immediate intervention:
         - Acute suicidality or homicidality
         - Psychotic decompensation
         - Medical instability (e.g., delirium, catatonia)
       - Describe the necessary emergent actions:
         - Crisis stabilization
         - Psychiatric hospitalization (voluntary/involuntary)
         - Involvement of mobile crisis units or emergency services
       - **Relevant Guidelines:** Crisis Intervention Team (CIT) Program Guidelines, APA Emergency Psychiatry Protocols
    
    Your analysis must be objective, clinically sound, and suitable for use in a multidisciplinary team discussion or supervisory case review. Avoid speculation and base conclusions on documented evidence and recognized standards of care.
    `

    // const systemPrompt = `You are a medical expert analyzing a patient case in a professional psychiatry clinic. Please provide a detailed analysis of the following case summary, adhering to established clinical practice guidelines.  For each section, explicitly reference the relevant guideline(s) used.

    // Your analysis should include:

    // 1.  **Presenting Complaint and History of Present Illness (HPI):**
    //     * A detailed summary of the patient's presenting complaint, including onset, duration, severity, and associated symptoms.
    //     * A thorough exploration of the HPI, including precipitating factors, exacerbating/relieving factors, and previous episodes.
    //     * Assess the impact of the symptoms on the patient's daily functioning (e.g., work, relationships, self-care).
    //     * **Relevant Guidelines:** *American Psychiatric Association (APA) Practice Guidelines for the Psychiatric Evaluation of Adults*
    //     * **Relevant Textbooks:** *Kaplan & Sadock's Synopsis of Psychiatry*, *The American Psychiatric Association Textbook of Psychiatry*

    // 2.  **Diagnostic Assessment:**
    //     * A comprehensive diagnostic assessment, including differential diagnoses and a principal diagnosis.
    //     * Justify the diagnoses based on the Diagnostic and Statistical Manual of Mental Disorders, 5th Edition (DSM-5) criteria.  Explicitly state the DSM-5 criteria met for each diagnosis.
    //     * Consider and rule out any medical conditions that may be contributing to the psychiatric symptoms.
    //     * **Relevant Guidelines:** *Diagnostic and Statistical Manual of Mental Disorders, 5th Edition (DSM-5)*
    //     * **Relevant Textbooks:** *Diagnostic and Statistical Manual of Mental Disorders, 5th Edition (DSM-5)*

    // 3.  **Risk Assessment:**
    //     * Evaluate the patient's risk of suicide, self-harm, and harm to others.
    //     * Document the assessment of suicidal/homicidal ideation, intent, plan, and access to means.
    //     * Determine the level of risk (e.g., low, moderate, high) and the rationale for that determination.
    //     * **Relevant Guidelines:** *APA Practice Guideline for the Assessment and Treatment of Patients With Suicidal Behavior*
    //     * **Relevant Resources:** *Columbia Suicide Severity Rating Scale (C-SSRS)*

    // 4.  **Treatment Recommendations:**
    //     * Evidence-based treatment recommendations, including pharmacological, psychotherapeutic, and psychosocial interventions.
    //     * For pharmacological recommendations, include specific medications, dosages, and rationale, considering potential benefits, risks, and side effects.
    //     * For psychotherapeutic recommendations, specify the type of therapy (e.g., CBT, DBT, IPT) and the recommended frequency and duration.
    //     * Address any co-occurring substance use disorders and provide appropriate treatment recommendations.
    //     * Consider the patient's preferences and cultural background in the treatment planning.
    //     * **Relevant Guidelines:** *APA Practice Guidelines for the specific disorder (e.g., APA Practice Guideline for the Treatment of Patients With Schizophrenia, APA Practice Guideline for the Treatment of Patients With Major Depressive Disorder)*
    //     * **Relevant Textbooks:** *Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications*

    // 5.  **Follow-Up and Monitoring:**
    //     * Specific recommendations for follow-up appointments, including frequency and purpose.
    //     * Outline a plan for monitoring treatment response, side effects, and adherence.
    //     * Address the need for any additional consultations or referrals (e.g., to a medical specialist, social worker).
    //     * **Relevant Guidelines:** *APA Practice Guidelines (as above)*

    // 6.  **Documentation:**
    //     * Emphasize the importance of accurate and thorough documentation of all aspects of the evaluation and treatment, including informed consent, treatment plans, progress notes, and any significant events.
    //     * **Relevant Guidelines:** *APA documentation guidelines, and any relevant legal and ethical guidelines.*
    //     * **Relevant Resources:** *The Joint Commission's documentation standards*

    // 7.  **Red Flags and Urgent Concerns:**
    //     * Identify any red flags or urgent concerns that require immediate attention, such as acute suicidality, psychosis, or medical instability.
    //     * Outline the steps to be taken in response to these concerns, including emergency interventions, hospitalization, or consultation with other specialists.
    //     * **Relevant Guidelines:** *Crisis Intervention Team (CIT) training guidelines*

    // `

    try {
      //   const userPrompt = caseSummaries
      //     .map((visit: any, index: number) => {
      //       // Format each visit's information
      //       let visitText = `Visit ${index + 1}:\n`
      //       visitText += `  Chief Complaint: ${
      //         visit.chief_complaint?.Complaint || 'N/A'
      //       }\n`
      //       visitText += `  Diagnosis: ${
      //         visit.ddx?.['Differential Diagnosis'] || 'N/A'
      //       }\n`
      //       visitText += `Notes: Compliance: ${
      //         visit.notes?.Compliance || 'N/A'
      //       }, Current Symptoms: ${
      //         visit.notes?.['Current Symptoms'] || 'N/A'
      //       }, Mental State ${visit.notes?.['Mental Status'] || 'N/A'}
      //       \n`
      //       visitText += `  Present Illness: ${
      //         visit.present_illness?.Notes || 'N/A'
      //       }\n`
      //       visitText += `  Management: ${
      //         visit.management?.managements
      //           .map((m: any) => m.Management)
      //           .join(', ') || 'N/A'
      //       }\n`
      //       visitText += `  Consultations: ${
      //         visit.consultations?.consultations
      //           .map((c: any) => c.consultation)
      //           .join(', ') || 'N/A'
      //       }\n`
      //       visitText += `  Investigations: ${
      //         visit.ix?.investigations
      //           .map((i: any) => i.investigation)
      //           .join(', ') || 'N/A'
      //       }\n`
      //       return visitText
      //     })
      //     .join('\n\n')

      const userPrompt = caseSummaries
        .map((visit: any, index: number) => {
          let visitText = `Visit ${index + 1}:\n`

          // Helper function to recursively format data
          const formatData = (obj: any, indent = '  ') => {
            let text = ''
            if (!obj) {
              return 'N/A'
            }

            if (Array.isArray(obj)) {
              text += obj.map((item) => formatData(item, indent)).join(', ')
            } else if (typeof obj === 'object') {
              for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                  // Prevents issues with prototype properties.
                  const value = obj[key]
                  if (
                    value !== null &&
                    value !== undefined &&
                    typeof value !== 'function'
                  ) {
                    text += `${indent}${key}: ${formatData(
                      value,
                      indent + '  '
                    )}\n` // Recursive call
                  }
                }
              }
            } else {
              text += String(obj)
            }
            return text
          }

          // Use the helper function to format the visit data.
          visitText += formatData(visit)
          return visitText
        })
        .join('\n\n')

      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${storedUserData?.clinic.key}`, // TODO: Secure this API key!
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt },
            ],
            temperature: 0.7,
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('GPT API Error:', errorData)
        throw new Error(
          `GPT API request failed: ${response.status} - ${
            errorData?.error?.message || 'Unknown error'
          }`
        )
      }

      const data = await response.json()
      gptResponse.value = data.choices[0].message.content
    } catch (error) {
      console.error('Error analyzing with GPT:', error)
      errorMessage.value = 'Error analyzing case. Please try again.'
    } finally {
      isAnalyzing.value = false
    }
  }

  return {
    isAnalyzing,
    gptResponse,
    errorMessage,
    analyzeWithGPT,
  }
}

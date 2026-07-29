Can we save those 20k Rs people with just a simple blood test?

# Predicting a rare disease with routine blood tests

In India, genetic testing for multiple endocrine neoplasia type 2, or MEN2, costs about INR 20,000. That is roughly $225 USD. For many families, this price puts a life-saving diagnosis out of reach.

MEN2 is a rare inherited condition linked to changes in the RET gene. One of its main risks is medullary thyroid carcinoma, or MTC. Finding that risk early matters. Yet the standard route depends on genetic sequencing, which is expensive and not equally available.

That leads to a practical research question: can machine learning use routine blood biomarkers, such as calcitonin and carcinoembryonic antigen (CEA), along with clinical features, to predict MTC risk without expensive genetic sequencing?

This question sits at a useful intersection of machine learning and medical diagnostics. Machine learning can find patterns across several measurements at once. Rare-disease research, however, often has very little data. A model can look strong in a small sample and still fail on new patients. Any useful study has to treat that limit seriously.

## The MEN2 Predictor project

My project, [MEN2 Predictor](https://github.com/ArjunCodess/men2-predictor), evaluates whether published MEN2 and RET-carrier records can support a transparent rare-disease machine-learning benchmark for MTC status.

The word "benchmark" matters. The project tests what can be learned from existing published records. It also makes the data and analysis available for inspection and reuse. It does not claim that a trained model is ready for use in a clinic.

The project has two linked contributions.

First, it provides an open dataset derived from the medical literature. MEN2 Predictor aggregates 149 confirmed RET carriers from 10 peer-reviewed studies. The cohort covers 14 RET variants. The anonymized dataset is published on [Zenodo](https://doi.org/10.5281/zenodo.20594453).

Second, it provides a reproducible model benchmark. The pipeline compares four analysis settings:

- Genotype-blind analysis, which tests prediction without RET variant information.
- Genotype-aware analysis, which includes genotype information.
- No-CEA analysis, which checks what happens when CEA is unavailable.
- Synthetic-augmentation analysis, which studies model behavior on simulated added data.

Together, these settings ask more than whether one model can produce a high score. They test how much the result depends on genetic information, biomarker availability, and artificial data expansion.

## What the blood markers can tell us

Calcitonin is closely tied to the thyroid's C cells, where MTC begins. CEA can also rise with MTC and may add useful context. Clinical features can give a model more information about the patient record.

A machine-learning model combines these signals and estimates the chance that an MTC label is present. In this project, sensitivity is especially important. Sensitivity measures how many positive cases the model finds. Missing a true case can carry a high cost in rare-disease research.

Accuracy answers a different question. It measures how often the model is correct across all cases. A model can have good accuracy while still missing too many positive cases, especially when classes are uneven. That is why both measures need to be read together.

## What the benchmark found

On the real literature-derived cohort, XGBoost reached 93.3% sensitivity with 83.3% accuracy. This result anchors the genotype-blind and genotype-aware analyses.

The synthetic-augmentation analysis produced higher scores for some models. Logistic regression reached the highest sensitivity at 96.1%. LightGBM reached the highest accuracy at 93.3%.

Those two synthetic-augmentation results are simulation-only results. They are not estimates from a real clinical cohort. Synthetic data can help test a pipeline and explore how models respond to larger samples. It cannot replace evidence from independently collected patients.

## Why rare-disease prediction is hard

The dataset has 149 people. In rare-disease research, that is a meaningful collection. For machine learning, it is still small. Each record can have a large effect on the final score.

The records also come from published studies. Different research teams may use different testing methods, reporting rules, and patient selection criteria. Some clinical details may be missing because the original paper did not report them. Publication itself can introduce bias because unusual or severe cases may be more likely to appear in the literature.

There is another risk: a model may learn patterns tied to a study rather than patterns tied to disease. Strong performance inside this dataset does not prove that the same model will work in a different hospital, region, or patient group.

These limits do not make the benchmark pointless. They define what it can answer. It can compare modeling choices on a shared dataset. It can expose gaps in the available evidence. It can also give future researchers a reproducible starting point for testing larger and more diverse cohorts.

## What would need to happen next

The next step would be external validation on real patients who were not represented in the published dataset. That work would need prospective data collection, consistent laboratory methods, careful handling of missing values, and evaluation across hospitals and patient groups.

Researchers would also need to study false negatives closely. A missed MTC case matters more than a single summary score can show. Model calibration, decision thresholds, and comparisons with current clinical practice would need formal review.

Most of all, any future system would need clinical oversight and evidence that it improves patient outcomes. A lower-cost test is useful only if its errors are understood and its use is safe.

## A benchmark, not a medical tool

MEN2 Predictor is a research benchmark. It is not a diagnostic system. It is not a screening system, a triage tool, or a clinical decision-support system. Its predictions must not be used to make decisions about patient care.

The project asks a narrower question: how much signal can routine biomarkers and clinical features provide in a small, literature-derived cohort of confirmed RET carriers?

That is still worth asking. Genetic sequencing remains the clinical reference, and the current dataset cannot replace it. Yet transparent research can show where lower-cost methods may deserve further study. For families facing an INR 20,000 test, that path is worth examining with care.

Project repository: [github.com/ArjunCodess/men2-predictor](https://github.com/ArjunCodess/men2-predictor)

Open dataset: [doi.org/10.5281/zenodo.20594453](https://doi.org/10.5281/zenodo.20594453)

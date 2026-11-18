import { PRICE_ROWS } from "./pricing";
import { countByCategory, SERVICES } from "./services";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateContent(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const priceRowIdSet = new Set(PRICE_ROWS.map((row) => row.id));
  const serviceSlugSet = new Set(SERVICES.map((s) => s.slug));

  // Check total services
  if (SERVICES.length !== 14) {
    errors.push(`Jumlah layanan harus 14, saat ini ada ${SERVICES.length}`);
  }

  // Check category counts
  const counts = countByCategory();
  if (counts.perawatan !== 5) {
    errors.push(`Kategori perawatan harus 5, saat ini ${counts.perawatan}`);
  }
  if (counts.perbaikan !== 6) {
    errors.push(`Kategori perbaikan harus 6, saat ini ${counts.perbaikan}`);
  }
  if (counts.instalasi !== 3) {
    errors.push(`Kategori instalasi harus 3, saat ini ${counts.instalasi}`);
  }

  for (const s of SERVICES) {
    // Check steps
    if (s.steps.length !== 4) {
      errors.push(`Layanan ${s.slug} harus memiliki tepat 4 tahap (ada ${s.steps.length})`);
    }

    // Check relatedSlugs
    if (s.relatedSlugs.length !== 3) {
      errors.push(`Layanan ${s.slug} harus memiliki tepat 3 relatedSlugs (ada ${s.relatedSlugs.length})`);
    }

    for (const rel of s.relatedSlugs) {
      if (!serviceSlugSet.has(rel)) {
        errors.push(`Layanan ${s.slug} mereferensikan relatedSlug yang tidak valid: ${rel}`);
      }
      if (rel === s.slug) {
        errors.push(`Layanan ${s.slug} mereferensikan dirinya sendiri di relatedSlugs`);
      }
    }

    // Check priceRowIds
    for (const pId of s.priceRowIds) {
      if (!priceRowIdSet.has(pId)) {
        errors.push(`Layanan ${s.slug} mereferensikan priceRowId yang tidak valid: ${pId}`);
      }
    }

    if (s.primaryPriceRowId && !priceRowIdSet.has(s.primaryPriceRowId)) {
      errors.push(`Layanan ${s.slug} primaryPriceRowId tidak valid: ${s.primaryPriceRowId}`);
    }

    // Draft warnings
    if (s.draft) {
      warnings.push(`Layanan ${s.slug} masih berstatus draf.`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

const isDirectRun =
  process.argv[1] &&
  (process.argv[1].endsWith("validate-content.ts") ||
    process.argv[1].endsWith("validate-content.js"));

if (isDirectRun) {
  const result = validateContent();
  console.log("Validation result:", result.valid ? "PASSED" : "FAILED");
  if (result.errors.length > 0) {
    console.error("Errors:", result.errors);
    process.exit(1);
  }
  if (result.warnings.length > 0) {
    console.log(`Warnings (${result.warnings.length}):`, result.warnings);
  }
}



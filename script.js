function judgeAssault() {
  const x_a1 = document.getElementById('aslt_x_a1').value;
  const x_t1 = document.getElementById('aslt_x_t1').value;
  const x_aslt1 = document.getElementById('aslt_x_aslt1').value === 'true';
  const x_int1 = document.getElementById('aslt_x_int1').value === 'true';
  const x_ilg1 = document.getElementById('aslt_x_ilg1').value === 'true';

  let verdict = false;

  if (x_a1 === 'person' && x_t1 === 'person' && x_aslt1 && x_int1 && x_ilg1) {
    verdict = true;
  }

  const resultDiv = document.getElementById('assaultResult');
  if (verdict) {
    resultDiv.textContent = 'Assault Verdict: Guilty\nPenalty: ≤ 5 years imprisonment or ≤ 10M KRW fine';
  } else {
    resultDiv.textContent = 'Assault Verdict: Not Guilty';
  }
}

function judgeFraud() {
  const x_a1 = document.getElementById('fraud_x_a1').value;
  const x_t1 = document.getElementById('fraud_x_t1').value;
  const x_act1_fraud = document.getElementById('fraud_x_act1_fraud').value === 'true';
  const x_int1 = document.getElementById('fraud_x_int1').value === 'true';
  const x_ilg1 = document.getElementById('fraud_x_ilg1').value === 'true';
  const x_result1_loss = document.getElementById('fraud_x_result1_loss').value === 'true';

  let verdict = false;

  if (x_a1 === 'person' && x_t1 === 'person' && x_act1_fraud && x_int1 && x_ilg1 && x_result1_loss) {
    verdict = true;
  }

  const resultDiv = document.getElementById('fraudResult');
  if (verdict) {
    resultDiv.textContent = 'Fraud Verdict: Guilty\nPenalty: ≤ 10 years imprisonment or ≤ 20M KRW fine';
  } else {
    resultDiv.textContent = 'Fraud Verdict: Not Guilty';
  }
}

function judgeForcedIndecent() {
  const x_a1 = document.getElementById('force_x_a1').value;
  const x_t1 = document.getElementById('force_x_t1').value;
  const x_means1_force = document.getElementById('force_x_means1_force').value;
  const x_act1_indecent = document.getElementById('force_x_act1_indecent').value === 'true';
  const x_ilg1 = document.getElementById('force_x_ilg1').value === 'true';

  let verdict = false;

  if (x_a1 === 'person' && x_t1 === 'person' && (x_means1_force === 'force' || x_means1_force === 'threat') && x_act1_indecent && x_ilg1) {
    verdict = true;
  }

  const resultDiv = document.getElementById('forceResult');
  if (verdict) {
    resultDiv.textContent = 'Forced Indecent Act Verdict: Guilty\nPenalty: ≤ 10 years imprisonment';
  } else {
    resultDiv.textContent = 'Forced Indecent Act Verdict: Not Guilty';
  }
}


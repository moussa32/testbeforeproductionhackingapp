import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Markup } from 'interweave';

import { getUsageAgreementContent } from '../../../api/StaticContentApi';

const TermsOfUse = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getUsageAgreementContent().then((res) =>
      setContent(res.data.usage_agreement)
    );
  }, []);

  return (
    <div className="container home px-0">
      <div className="terms-of-use">
        <Markup content={content} />
      </div>
    </div>
  );
};

export default TermsOfUse;

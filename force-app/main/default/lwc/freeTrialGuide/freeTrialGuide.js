import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import requestProvisioning from '@salesforce/apex/ScratchOrgProvisioner.requestProvisioning';
import USER_ID from '@salesforce/user/Id';
import USERNAME_FIELD from '@salesforce/schema/User.Username';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import TRIAL_HERO from '@salesforce/resourceUrl/trial_hero';
import AGENTFORCE_BANNER from '@salesforce/resourceUrl/agentforce360_banner';
import COURSES_IMAGE from '@salesforce/resourceUrl/courses';
import STUDENTS_IMAGE from '@salesforce/resourceUrl/students';
import ENROLLMENTS_IMAGE from '@salesforce/resourceUrl/enrollments';
import THREATS_IMAGE from '@salesforce/resourceUrl/threats';
import PERFORMANCE_IMAGE from '@salesforce/resourceUrl/performance';
import USER_ACTIVITY_IMAGE from '@salesforce/resourceUrl/user_activity';
import EVENT_MANAGER_IMAGE from '@salesforce/resourceUrl/event_manager';
import EVENT_MONITORING_SETTINGS_IMAGE from '@salesforce/resourceUrl/eventmonitoringsettings';
import TEST_THREAT_EVENTS_IMAGE from '@salesforce/resourceUrl/testthreatdetectionevents';
import EINSTEIN_SETUP_IMAGE from '@salesforce/resourceUrl/einstein_setup';
import AGENTFORCE_BUILDER_IMAGE from '@salesforce/resourceUrl/agentforce_builder';
import TOPIC_CREATION_IMAGE from '@salesforce/resourceUrl/newtopiccreation';
import CEE_LEARNING_AGENT_IMAGE from '@salesforce/resourceUrl/CEE_Learning_Agent_image';
import EXPLORE_AGENT_SCRIPT_IMAGE from '@salesforce/resourceUrl/Explore_the_agent_script_image';
import ADD_SEARCH_ENROLLMENTS_1 from '@salesforce/resourceUrl/Add_the_search_enrollments_1';
import ADD_SEARCH_ENROLLMENTS_2 from '@salesforce/resourceUrl/Add_the_search_enrollments_2';
import TEST_AGENTFORCE_1 from '@salesforce/resourceUrl/test_agentforce1';
import TEST_AGENTFORCE_2 from '@salesforce/resourceUrl/test_agentforce2';
import TEST_AGENTFORCE_3 from '@salesforce/resourceUrl/test_agentforce3';
import TEST_AGENTFORCE_4 from '@salesforce/resourceUrl/test_agentforce4';
import AGENT_ACTION_IMAGE from '@salesforce/resourceUrl/agentactionimage';
import AGENT_BUILDER_TEST_IMAGE from '@salesforce/resourceUrl/agentresponse';
import DEPLOY_IMAGE from '@salesforce/resourceUrl/deploy';
// import CHANGE_MANAGEMENT_IMAGE from '@salesforce/resourceUrl/changemanagement';
import AFV_IMAGE from '@salesforce/resourceUrl/afv';
import OPEN_VIBES_IMAGE from '@salesforce/resourceUrl/openvibes';
import VIBES_LOADING_IMAGE from '@salesforce/resourceUrl/vibesloading';
import VIBES_ENABLE_BUILD_IMAGE from '@salesforce/resourceUrl/vibesenablebuild';
import RETRIEVE_METADATA_IMAGE from '@salesforce/resourceUrl/retrievemetadata';
import TEST_RUN_IMAGE from '@salesforce/resourceUrl/test_run';
// import AGENTBUILDER_BATCH_TEST_IMAGE from '@salesforce/resourceUrl/OpenBatchTest';
// import TEST_CASE_CREATION_IN_PROGRESS_IMAGE from '@salesforce/resourceUrl/TestExec';
// import NEW_TEST_CREATION_TEST_CASE_IMAGE from '@salesforce/resourceUrl/TestCreation';
import NEW_TEST_CREATION_LNDING_IMAGE from '@salesforce/resourceUrl/new_test_creation_lnding';
// import NEW_TEST_CREATION_2_IMAGE from '@salesforce/resourceUrl/new_test_creation_2'; // Excluded - exceeds 5MB limit
import NEW_TEST_CREATION_3_IMAGE from '@salesforce/resourceUrl/new_test_creation_3';
import NEW_RESPONSE_QUALITY_EVAL_IMAGE from '@salesforce/resourceUrl/new_response_quality_eval';
import TEST_RESULT_IMAGE from '@salesforce/resourceUrl/testresult';
import VIBES_SUMMARY_CARD_IMAGE from '@salesforce/resourceUrl/vibes_summary_card';
import VIBES_DEPLOY_1_IMAGE from '@salesforce/resourceUrl/vibes_deploy_1';
import VIBES_DEPLOY_2_IMAGE from '@salesforce/resourceUrl/vibes_deploy_2';
import VIBES_DASHBOARD_RESULT_IMAGE from '@salesforce/resourceUrl/vibes_dashboard_result';
import CLAUDE_DASHBOARD_RESULT_IMAGE from '@salesforce/resourceUrl/claude_dashboard_result';
import DX_INSPECTOR_CHANGE_LIST_IMAGE from '@salesforce/resourceUrl/dx_inspector_change_list';
import DEPLOY_CHANGES_CONNECT_IMAGE from '@salesforce/resourceUrl/deploy_changes_connect';
import CONNECT_TO_ORG_IMAGE from '@salesforce/resourceUrl/connect_to_org';
import DEPLOY_CHANGES_PREVIEW_IMAGE from '@salesforce/resourceUrl/deploy_changes_preview';
import DEPLOYMENT_STATUS_IMAGE from '@salesforce/resourceUrl/deployment_status';
import AGENTFORCE_AGENT_SETUP_IMAGE from '@salesforce/resourceUrl/agentforceagentsetup';
import NEW_AGENT_CREATION_IMAGE from '@salesforce/resourceUrl/new_agent_creation';
import EMPLOYEE_AGENT_IMAGE from '@salesforce/resourceUrl/employeeagent';
import UNCHECK_GEN_FAQ_IMAGE from '@salesforce/resourceUrl/uncheckgenfaq';
import AGENT_DESC_IMAGE from '@salesforce/resourceUrl/agentdesc';
import IGNORE_WARNINGS_IMAGE from '@salesforce/resourceUrl/ignorewarnings';
import MCP_IMAGE from '@salesforce/resourceUrl/MCP';
import MCP_2_IMAGE from '@salesforce/resourceUrl/MCP_2';
import MCP_3_IMAGE from '@salesforce/resourceUrl/MCP_3';
import TOOLKIT_IMAGE from '@salesforce/resourceUrl/toolkit';
import PLANAGENT_IMAGE from '@salesforce/resourceUrl/planagent';
import ENABLES4A_IMAGE from '@salesforce/resourceUrl/enables4a';
import SETUPWITHAGENTFORCE_IMAGE from '@salesforce/resourceUrl/setupwithagentforce';
import S4A_HEALTH_IMAGE from '@salesforce/resourceUrl/s4a_health';
import S4A_OBJECTS_IMAGE from '@salesforce/resourceUrl/s4a_objects';
import S4A_DEEP_IMAGE from '@salesforce/resourceUrl/s4a_deep';
import LEARNING_MANAGEMENT_DASHBOARD_IMAGE from '@salesforce/resourceUrl/learningmanagementdashboard';

export default class FreeTrialGuide extends LightningElement {
    trialHeroImage = TRIAL_HERO;
    coursesImage = COURSES_IMAGE;
    studentsImage = STUDENTS_IMAGE;
    enrollmentsImage = ENROLLMENTS_IMAGE;
    threatsImage = THREATS_IMAGE;
    performanceImage = PERFORMANCE_IMAGE;
    userActivityImage = USER_ACTIVITY_IMAGE;
    eventManagerImage = EVENT_MANAGER_IMAGE;
    eventMonitoringSettingsImage = EVENT_MONITORING_SETTINGS_IMAGE;
    testThreatEventsImage = TEST_THREAT_EVENTS_IMAGE;
    einsteinSetupImage = EINSTEIN_SETUP_IMAGE;
    agentforceBuilderImage = AGENTFORCE_BUILDER_IMAGE;
    topicCreationImage = TOPIC_CREATION_IMAGE;
    ceeLearningAgentImage = CEE_LEARNING_AGENT_IMAGE;
    exploreAgentScriptImage = EXPLORE_AGENT_SCRIPT_IMAGE;
    addSearchEnrollments1 = ADD_SEARCH_ENROLLMENTS_1;
    addSearchEnrollments2 = ADD_SEARCH_ENROLLMENTS_2;
    testAgentforce1 = TEST_AGENTFORCE_1;
    testAgentforce2 = TEST_AGENTFORCE_2;
    testAgentforce3 = TEST_AGENTFORCE_3;
    testAgentforce4 = TEST_AGENTFORCE_4;
    agentActionImage = AGENT_ACTION_IMAGE;
    agentBuilderTestImage = AGENT_BUILDER_TEST_IMAGE;
    deployImage = DEPLOY_IMAGE;
    // changeManagementImage = CHANGE_MANAGEMENT_IMAGE;
    afvImage = AFV_IMAGE;
    openVibesImage = OPEN_VIBES_IMAGE;
    vibesLoadingImage = VIBES_LOADING_IMAGE;
    vibesEnableBuildImage = VIBES_ENABLE_BUILD_IMAGE;
    retrieveMetadataImage = RETRIEVE_METADATA_IMAGE;
    testRunImage = TEST_RUN_IMAGE;
    // agentbuilderBatchTestImage = AGENTBUILDER_BATCH_TEST_IMAGE;
    // testCaseCreationInProgressImage = TEST_CASE_CREATION_IN_PROGRESS_IMAGE;
    newTestCreationLndingImage = NEW_TEST_CREATION_LNDING_IMAGE;
    // newTestCreation2Image = NEW_TEST_CREATION_2_IMAGE; // Excluded - resource exceeds 5MB limit
    newTestCreation3Image = NEW_TEST_CREATION_3_IMAGE;
    newResponseQualityEvalImage = NEW_RESPONSE_QUALITY_EVAL_IMAGE;
    testResultImage = TEST_RESULT_IMAGE;
    vibesSummaryCardImage = VIBES_SUMMARY_CARD_IMAGE;
    vibesDeploy1Image = VIBES_DEPLOY_1_IMAGE;
    vibesDeploy2Image = VIBES_DEPLOY_2_IMAGE;
    vibesDashboardResultImage = VIBES_DASHBOARD_RESULT_IMAGE;
    claudeDashboardResultImage = CLAUDE_DASHBOARD_RESULT_IMAGE;
    dxInspectorChangeListImage = DX_INSPECTOR_CHANGE_LIST_IMAGE;
    deployChangesConnectImage = DEPLOY_CHANGES_CONNECT_IMAGE;
    connectToOrgImage = CONNECT_TO_ORG_IMAGE;
    deployChangesPreviewImage = DEPLOY_CHANGES_PREVIEW_IMAGE;
    deploymentStatusImage = DEPLOYMENT_STATUS_IMAGE;
    agentforceAgentSetupImage = AGENTFORCE_AGENT_SETUP_IMAGE;
    newAgentCreationImage = NEW_AGENT_CREATION_IMAGE;
    employeeAgentImage = EMPLOYEE_AGENT_IMAGE;
    uncheckGenFaqImage = UNCHECK_GEN_FAQ_IMAGE;
    agentDescImage = AGENT_DESC_IMAGE;
    ignoreWarningsImage = IGNORE_WARNINGS_IMAGE;
    mcpImage = MCP_IMAGE;
    mcp2Image = MCP_2_IMAGE;
    mcp3Image = MCP_3_IMAGE;
    toolkitImage = TOOLKIT_IMAGE;
    planagentImage = PLANAGENT_IMAGE;
    enables4aImage = ENABLES4A_IMAGE;
    setupwithagentforceImage = SETUPWITHAGENTFORCE_IMAGE;
    s4aHealthImage = S4A_HEALTH_IMAGE;
    s4aObjectsImage = S4A_OBJECTS_IMAGE;
    s4aDeepImage = S4A_DEEP_IMAGE;
    learningManagementDashboardImage = LEARNING_MANAGEMENT_DASHBOARD_IMAGE;
    @track currentStep = 0;
    @track isLoading = false;
    @track userName;
    @track activeTool = 'claude';
    @track activeSection = '';

    steps = [
        { label: 'Welcome', value: '0' },
        { label: 'Setup with Agentforce', value: '1' },
        { label: 'Agentforce Builder', value: '2' },
        { label: 'Test Agentforce', value: '3' },
        // { label: 'Agentforce Vibes', value: '4' }, // Commented out - can be restored later
        { label: 'Bring Your Own AI Tools', value: '4' },
        { label: 'Deploy Securely', value: '5' },
        { label: 'Protect Your Data', value: '6' },
        { label: 'Summary', value: '7' }
    ];

    get currentStepValue() {
        return String(this.currentStep);
    }

    @track showProvisioningModal = false;
    @track provisioningError;
    @track provisioningPending = false;
    userEmail;

    @wire(getRecord, { recordId: USER_ID, fields: [USERNAME_FIELD, EMAIL_FIELD] })
    wiredUser({ error, data }) {
        if (data) {
            this.userName = data.fields.Username.value;
            this.userEmail = data.fields.Email.value;
        } else if (error) {
            // In case of error, leave userName/userEmail undefined and fail silently in the UI.
            // eslint-disable-next-line no-console
            console.warn('Error loading current user record', error);
        }
    }

    get hasUserName() {
        return !!this.userName;
    }

    async handleCreateTargetOrg() {
        this.provisioningError = null;
        this.provisioningPending = true;
        this.showProvisioningModal = true;

        const email = this.userEmail || '';
        try {
            const result = await requestProvisioning({ userEmail: email });
            this.provisioningError = result === 'OK' ? null : result;
        } catch (e) {
            this.provisioningError = e.body?.message || e.message || 'Request failed. Check Setup > Remote Site Settings for HostedScratch.';
        } finally {
            this.provisioningPending = false;
        }
    }

    closeProvisioningModal() {
        this.showProvisioningModal = false;
        this.provisioningError = null;
        this.provisioningPending = false;
    }

    handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            this.closeProvisioningModal();
        }
    }

    stopPropagation(event) {
        event.stopPropagation();
    }

    /** URL for the hosted scratch org provisioner (must match ScratchOrgProvisioner.cls). */
    get provisioningUrl() {
        const base = 'https://hosted-scratch.herokuapp.com/launch?template=https://github.com/SFDC-Assets/platformTrial/tree/jan26-trial-experience';
        const email = this.userEmail || '';
        if (email.trim()) {
            return base + '&email=' + encodeURIComponent(email.trim());
        }
        return base;
    }

    /** Open the provisioner in a new tab (use when server-side call gets 302 so user can complete flow in browser). */
    openProvisionerInNewTab() {
        window.open(this.provisioningUrl, '_blank', 'noopener,noreferrer');
    }

    get trialExpiryDate() {
        const today = new Date();
        const expiry = new Date(today);
        expiry.setDate(expiry.getDate() + 30);
        return expiry.toLocaleDateString();
    }

    get stepsWithStatus() {
        return this.steps.map((step, index) => {
            let status = 'pending';
            if (index < this.currentStep) {
                status = 'completed';
            } else if (index === this.currentStep) {
                status = 'current';
            }
            // Sequential numbering now that Vibes is removed
            let stepNumber = index + 1;
            return {
                ...step,
                index: index,
                number: stepNumber,
                status: status,
                className: `progress-step ${status}`
            };
        });
    }

    scrollToTop() {
        // Use setTimeout to ensure DOM has updated after step change
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
            // Try scrolling the guide container
            const container = this.template.querySelector('.guide-container');
            if (container) {
                container.scrollTop = 0;
            }
            // Scroll the window
            window.scrollTo(0, 0);
            // Also try scrolling the document body and html element
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 0);
    }

    handleStepClick(event) {
        const stepIndex = event.currentTarget.dataset.index;
        if (stepIndex !== undefined) {
            this.currentStep = parseInt(stepIndex, 10);
            this.scrollToTop();
        }
    }

    get isWelcome() {
        return this.currentStep === 0;
    }

    get isStep1() {
        return this.currentStep === 1;
    }

    get isStep2() {
        return this.currentStep === 2;
    }

    get isStep3() {
        return this.currentStep === 3;
    }

    // get isStep4() {
    //     return this.currentStep === 4;
    // }
    // Commented out - Agentforce Vibes step removed

    get isStep5b() {
        return this.currentStep === 4; // Bring Your Own AI Tools is now step 4
    }

    get isStep5() {
        return this.currentStep === 5; // Deploy Securely
    }

    get isStep6() {
        return this.currentStep === 6; // Protect Your Data
    }

    get isStep7() {
        return this.currentStep === 7; // Summary
    }

    get isComplete() {
        return this.currentStep === 8;
    }

    get nextButtonLabel() {
        if (this.currentStep === 0) {
            return "Let's Get Started";
        }
        return 'Next';
    }

    handleNext() {
        if (this.currentStep < 7) { // Changed from 8 to 7 since we have one less step
            this.currentStep++;
            this.scrollToTop();
        }
    }

    handlePrevious() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.scrollToTop();
        }
    }

    handleRestart() {
        this.currentStep = 0;
        this.scrollToTop();
    }

    handleCardClick(event) {
        const step = parseInt(event.currentTarget.dataset.step, 10);
        if (!isNaN(step)) {
            this.currentStep = step;
            this.scrollToTop();
        }
    }

    handleBackToWelcome() {
        this.currentStep = 0;
        this.scrollToTop();
    }

    // Journey card sections (accordion: one open at a time)
    toggleSection(event) {
        const section = event.currentTarget.dataset.section;
        const isOpening = this.activeSection !== section;
        this.activeSection = isOpening ? section : '';

        // Don't yank the page to the top on an in-page accordion toggle.
        // When opening, gently bring the clicked card + revealed content into
        // view; when collapsing, leave the scroll position untouched.
        if (isOpening) {
            const card = event.currentTarget;
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                if (card && typeof card.scrollIntoView === 'function') {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 0);
        }
    }

    get isMcpSection() {
        return this.activeSection === 'mcp';
    }

    get isToolSection() {
        return this.activeSection === 'tool';
    }

    get isExerciseSection() {
        return this.activeSection === 'exercise';
    }

    get mcpCardClass() {
        return this.activeSection === 'mcp' ? 'journey-card clickable active' : 'journey-card clickable';
    }

    get toolCardClass() {
        return this.activeSection === 'tool' ? 'journey-card clickable active' : 'journey-card clickable';
    }

    get exerciseCardClass() {
        return this.activeSection === 'exercise' ? 'journey-card clickable active' : 'journey-card clickable';
    }

    get mcpCardHint() {
        return this.activeSection === 'mcp' ? 'Viewing' : 'Click to view';
    }

    get toolCardHint() {
        return this.activeSection === 'tool' ? 'Viewing' : 'Click to view';
    }

    get exerciseCardHint() {
        return this.activeSection === 'exercise' ? 'Viewing' : 'Click to view';
    }

    // Tool tab selection
    selectTool(event) {
        const tool = event.currentTarget.dataset.tool;
        if (tool) {
            this.activeTool = tool;
        }
    }

    get isClaudeTool() {
        return this.activeTool === 'claude';
    }

    get isCursorTool() {
        return this.activeTool === 'cursor';
    }

    get claudeTabClass() {
        return this.activeTool === 'claude' ? 'tool-tab active' : 'tool-tab';
    }

    get cursorTabClass() {
        return this.activeTool === 'cursor' ? 'tool-tab active' : 'tool-tab';
    }

    handleCopyCode(event) {
        const button = event.currentTarget;
        const codeEl = button.parentElement.querySelector('.copy-code-text');
        if (!codeEl) {
            return;
        }
        const text = codeEl.textContent;
        const markCopied = () => {
            const label = button.querySelector('.copy-code-label');
            if (label) {
                const original = label.textContent;
                label.textContent = 'Copied!';
                button.classList.add('copied');
                // eslint-disable-next-line @lwc/lwc/no-async-operation
                setTimeout(() => {
                    label.textContent = original;
                    button.classList.remove('copied');
                }, 2000);
            }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(markCopied).catch(() => {
                this.fallbackCopy(text, markCopied);
            });
        } else {
            this.fallbackCopy(text, markCopied);
        }
    }

    fallbackCopy(text, onDone) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            if (onDone) {
                onDone();
            }
        } catch (e) {
            // Silent failure - clipboard not available
        }
        document.body.removeChild(textarea);
    }

}